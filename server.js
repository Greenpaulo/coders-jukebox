const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();

// Creates an instance of our models (DB collection).
const User = require('./models/User');
const Video = require('./models/Video');


// Integrating Next.js with Express
nextApp.prepare().then(() => {
  const app = express();

  // Setting up GraphQL
  app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
      type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String
        ownedVideos: [Video!]
      }

      type Video {
        _id: ID!
        title: String!
        thumbnailURL: String!
        videoURL: String!
        userID: String!
        owner: User!
      }

      input UserInput{
        firstName: String! 
        lastName: String! 
        email: String!
        password: String!
      }

      input VideoInput{
        title: String! 
        thumbnailURL: String! 
        videoURL: String!
        userID: String!
      }
    
      type RootQuery {
        users: [User!]!
        videos: [Video!]!
      }

      type RootMutation {
        createUser(userInput: UserInput): User
        createVideo(videoInput: VideoInput): Video
      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      // Query all users
      users: () => {
        return User.find()
          .then(users => {
            return users.map(user => {
              return {...user._doc, _id: user.id };
            })
          })
          .catch(err => {
            throw err
          })
      },

      // Query all video
      videos: () => {
        return Video.find()
          .then(videos => {
            return videos.map(video => {
              return {...video._doc, _id: video.id };
            })
          })
          .catch(err => {
            throw err
          })
      },

      // Create a user
      createUser: (args) => {
        // Check if the email already exists
        return User.findOne({ email: args.userInput.email})
          .then(user => {
            // if a user exists i.e. not undefined
            if (user) {
              throw new Error('Email address is already taken.')
            }
            // Hash the password and create the user
            return  bcrypt.hash(args.userInput.password, 12)
              .then(hashedPassword => {
                const user = new User({
                  firstName: args.userInput.firstName,
                  lastName: args.userInput.lastName,
                  email: args.userInput.email,
                  password: hashedPassword,
                  jobTitle: null,
                  location: null
                });
                return user.save()
                  .then(res => {
                    console.log(res);
                    return {...res._doc, password: null, _id: user.id}; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();
                  })
                  .catch(err => {
                    console.log(err);
                    throw err;
                  })
              })
              .catch(err => {
                throw err
              })
          })
          .catch(err => {
            throw err
          })
      },

      //Create a video
      createVideo: (args) => {
        const video = new Video({
          title: args.videoInput.title,
          thumbnailURL: args.videoInput.thumbnailURL,
          videoURL: args.videoInput.videoURL,
          owner: '5e7ddfd0a595a30de06a748b' // Mongoose will convert this to Object ID
        })
        let ownedVideo; 
        return video.save()
          .then(res => {
            ownedVideo = { ...res._doc, _id: video.id };
            // Find the user associated who choose the video
            return User.findById('5e7ddfd0a595a30de06a748b')
          })
          .then(user => {
            if (!user) {
              throw new Error('User not found.');
            }
            user.ownedVideos.push(video); // We can pass the object and mongoose will pull out the id as defined in our User schema.
            return user.save();
          })
          .then(res => {
            return ownedVideo;
          })
            
          .catch(err => {
            console.log(err);
            throw err;
          })
      }
    },
    graphiql: true
  }))

  // Tell Next.js to handle all other routes
  app.all('*', (req, res) => {
    return handle(req, res)
  })

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
  
})