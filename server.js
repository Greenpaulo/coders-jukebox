const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();

// Creates an instance of our Users class (DB collection).
const User = require('./models/User');

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
      }

      input UserInput{
        firstName: String! 
        lastName: String! 
        email: String!
      }
    
      type RootQuery {
        users: [User!]!
      }

      type RootMutation {
        createUser(userInput: UserInput): User
      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      users: () => {
        return users;
      },
      createUser: (args) => {
        const user = new User({
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email
        })
        return user.save()
          .then(res => {
            console.log(res);
            return {...res._doc};
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