const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();

// Creates an instance of our models (DB collection).
const User = require('./models/User');
const Playlist = require('./model/Playlist');
const Video = require('./model/Video');


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
        password: String!
      }

      type Video {
        _id: ID!
        title: String!
        thumbnailURL: String!
        videoURL: String!
        userID: String!
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

      // Create a user
      createUser: (args) => {
        const user = new User({
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password
        })
        return user.save()
          .then(res => {
            console.log(res);
            return {...res._doc, _id: user.id}; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();
          })
          .catch(err => {
            console.log(err);
            throw err;
          })
      },

      //Create a video
      createVideo: (args) => {
        const video = new Video({
          title: args.userInput.title,
          thumbnailURL: args.userInput.thumbnailURL,
          videoURL: args.userInput.videoURL,
          userID: args.userInput.userID
        })
        return video.save()
          .then(res => {
            console.log(res);
            return { ...res._doc, _id: video.id };
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