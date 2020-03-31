const bcrypt = require('bcryptjs');
// Creates an instance of our models (DB collection).
const User = require('../../models/User');

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
        location: null
      });

      const res = await user.save();
      return { ...res._doc, password: null, _id: user.id }; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();

    } catch (err) {
      throw err
    }
  }
}