const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();




// Integrating Next.js with Express
nextApp.prepare().then(() => {
  const app = express();

  // Setting up GraphQL
  app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
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