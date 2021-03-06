const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const User = require('./models/User');
const keys = require('./config/keys');

// File uploads
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/isAuth');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();
const cors = require('cors');
const helmet = require("helmet");

// Integrating Next.js with Express
nextApp.prepare().then(() => {
  const app = express();

  // Add helmet middleware to secure app by setting HTTP headers
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());

  // Allow cross-origin
  app.use(cors());

  // Set up our auth middleware
  app.use(isAuth);

  app.use(methodOverride('_method'));

  
  // Setting up GraphQL
  app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  }))

  // SET UP FOR FILE UPLOADS
  // Create mongo connection
  const conn = mongoose.createConnection(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Init gfs
  let gfs;

  conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });
  // conn.once("open", () => {
  //   // init stream
  //   gfs = new mongoose.mongo.GridFSBucket(conn.db, {
  //     bucketName: "uploads"
  //   });
  // });

  // Create storage engine
  const storage = new GridFsStorage({
    url: keys.mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });


  // API ENDPOINTS FOR FILE UPLOADS

  // @route GET /upload
  // @desc Uploads a single file
  app.post('*/upload', upload.single('file'), async (req, res) => {
    // Also add the filename to the user's data
    try {
      // Get the user's info
      const user = await User.findById(req.userId);

      // Update the profilePhoto section of user data
      user.profilePhotoFilename = req.file.filename

      await user.save();

    } catch (err) {
      throw err
    }

    res.send(req.file);
  });

  // @route GET /file/:filename
  // @desc Gets a single file from the uploads collection
  app.get('/file/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // gfs.find({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
      return res.json(file);

    })
  })

  // @route GET /image/:filename
  // @desc Display Image
  app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // gfs.find({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }

      // Check if image
      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: 'Not an image'
        });
      }
    });
  });

  // Tell Next.js to handle all other routes
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  // Connecting to MongoDB and starting the dev server
  mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(
      app.listen(port, err => {
        if (err) throw err
        console.log(`> Connected to MongoDB, server ready on http://localhost:${port}`)
      })
    )
    .catch(err => {
      console.log(err)
    })

})