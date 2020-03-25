const express = require('express')
const next = require('next')
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();

const users = [];

nextApp.prepare().then(() => {
  const app = express();

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
        const user = {
          _id: Math.random().toString(),
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email
        }
        users.push(user);
        return user;
      }
    },
    graphiql: true
  }))

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})