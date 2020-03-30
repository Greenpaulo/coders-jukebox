const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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
`)