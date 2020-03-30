const bcrypt = require('bcryptjs');
// Creates an instance of our models (DB collection).
const User = require('../../models/User');
const Video = require('../../models/Video');


module.exports = {
  // Query all users
  users: () => {
    return User.find()
      .then(users => {
        return users.map(user => {
          return { ...user._doc, _id: user.id };
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
          return { ...video._doc, _id: video.id };
        })
      })
      .catch(err => {
        throw err
      })
  },

  // Create a user
  createUser: (args) => {
    // Check if the email already exists
    return User.findOne({ email: args.userInput.email })
      .then(user => {
        // if a user exists i.e. not undefined
        if (user) {
          throw new Error('Email address is already taken.')
        }
        // Hash the password and create the user
        return bcrypt.hash(args.userInput.password, 12)
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
                return { ...res._doc, password: null, _id: user.id }; // Note .id is a shortcut provided by mongoose which converts the mongoDB objectID to a string - instead of us doing _id: user._doc._id.toString();
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
}