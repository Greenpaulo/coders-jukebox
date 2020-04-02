const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
    ownedVideos: [Video!]
    userComments: [Comment!]
    playlistComments: [Comment!]
  }

  type Video {
    _id: ID!
    title: String!
    thumbnailURL: String!
    videoURL: String!
    owner: User!
  }

  type Comment {
    _id: ID!
    content: String!
    commenter: User!
    playlistOwner: User!
    createdAt: String!
    updatedAt: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
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

  input CommentInput{
    content: String!
    commenterID: String!
    playlistOwnerID: String!
  }

  type RootQuery {
    users: [User!]!
    videos: [Video!]!
    comments: [Comment!]!
    login(email: String!, password: String!): AuthData
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    createVideo(videoInput: VideoInput): Video
    createComment(commentInput: CommentInput): Comment
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)