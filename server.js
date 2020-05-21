const express = require('express')
// const next = require('next')
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');

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

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev })
// const handle = nextApp.getRequestHandler();
const cors = require('cors');


  
// Integrating Next.js with Express
// nextApp.prepare().then(() => {
  const app = express();

  // Allow cross-origin
  app.use(cors());

  // Setting up Sessions
  app.use(session({
    secret: 'wlofup9ig9iejkjgkljskljvlks',
    resave: false,
    saveUninitialized: false,
  }))
  
  // Set up our auth middleware
  app.use(isAuth);

  app.use(methodOverride('_method'));

  
  // Setting up GraphQL
  app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  }))
  // app.use('/graphql', graphqlHttp(req => ({
  //   schema: graphqlSchema,
  //   rootValue: graphqlResolvers,
  //   graphiql: true,
  //   context: { req: req}
  // })))

  // Tell Next.js to handle all other routes
  // app.all('*', (req, res) => {
  //   return handle(req, res)
  // })

  // Connecting to MongoDB and starting the dev server
  mongoose
    .connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds121996.mlab.com:21996/coders-jukebox-dev`, { useNewUrlParser: true, useUnifiedTopology: true }
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




// // Mongo URI
const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds121996.mlab.com:21996/coders-jukebox-dev`;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
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


// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });
  // res.redirect('/');
  res.send(req.file);
});

// app.listen(port, err => {
//   if (err) throw err
//   console.log(`> Connected to MongoDB, server ready on http://localhost:${port}`)
// })
  
// })