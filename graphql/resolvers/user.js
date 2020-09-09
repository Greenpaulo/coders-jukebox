const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Creates an instance of our models (DB collection).
const User = require('../../models/User');
const keys = require('../../config/keys');

module.exports = {
  // Query all users
  users: async () => {
    try {
      const users = await User.find()
      return users.map(user => {
        return { ...user._doc, _id: user.id };
      })
    } catch (err) {
      throw err
    }
  },

  // Query a single user by id
  userById: async (args) => {
    try {
      const foundUser = await User.findById(args.id);
      if (!foundUser) {
        throw new Error('User does not exist!')
      }
      return { ...foundUser._doc, _id: foundUser.id };
      // }
    } catch (err) {
      throw err
    }
  },


  // Query a single user data using the token
  userByToken: async (_, req, res) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    } 
    try {
      const foundUser = await User.findById(req.userId);
      if (!foundUser) {
        throw new Error('User does not exist!')
      }
      return { ...foundUser._doc, _id: foundUser.id };

    } catch (err) {
      throw err
    }
  },




  // Create a user
  createUser: async (args) => {
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: args.userInput.email })
      // if a user exists i.e. not undefined
      if (existingUser) {
        throw new Error('Email address is already taken.')
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
      // Create a new user instance
      const user = new User({
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        email: args.userInput.email,
        password: hashedPassword,
        jobTitle: null,
        location: null,
        languages: [],
        about: null,
        ownedVideos: [],
        userComments: [],
        playlistComments: [],
        favourites: [],
        profilePhotoFilename: null
      });

      const res = await user.save();
      return { ...res._doc, password: null, _id: user.id }; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();

    } catch (err) {
      throw err
    }
  },


  // Update a user
  updateUser: async (args, req) => {
    try {
      // Get the user's info
      const user = await User.findById(req.userId);

      // Update the info
      user.firstName = args.profileInput.firstName;
      user.lastName = args.profileInput.lastName;
      user.jobTitle = args.profileInput.jobTitle;
      user.location = args.profileInput.location;
      user.languages = args.profileInput.languages;
      user.about = args.profileInput.about;

      const res = await user.save();
      return { ...res._doc, password: null, _id: user.id }; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();

    } catch (err) {
      throw err
    }
  },

  // login
  login: async ({ email, password}, req, res) => {
    // Validate email and password
    const user = await User.findOne({email: email});
    if (!user) {
      throw new Error('User does not exist!')
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect');
    }
    // Create the token
    const token = jwt.sign(
      { userId: user.id, email: user.email }, keys.jwtSecret, 
    );

    // Create a session for the user - set the user id on the session
    // Express-session will add a cookie for the user
    // const options = {
    //   maxAge: 1000 * 60 * 60 * 24, //expires in a day
    //   domain: 'http://localhost:3000'
    // }
    return { userId: user.id, token: token}
  }
}