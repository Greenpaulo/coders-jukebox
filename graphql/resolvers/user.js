const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Creates an instance of our models (DB collection).
const User = require('../../models/User');

module.exports = {
  // Query all users
  // users: async () => {
  //   try {
  //     const users = await User.find()
  //     return users.map(user => {
  //       return { ...user._doc, _id: user.id };
  //     })
  //   } catch (err) {
  //     throw err
  //   }
  // },

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
  },

  // login
  login: async ({ email, password}) => {
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
    const token = jwt.sign({ userId: user.id, email: user.email }, "ojwafwe5f1weeD4F4fwfwjkjK5SHhwqFlfj6hewjf1EFDSF5SDFjn6Suvref564f", {expiresIn: '1h'});

    return { userId: user.id, token: token, tokenExpiration: 1}
  }
}