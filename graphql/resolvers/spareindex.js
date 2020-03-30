const bcrypt = require('bcryptjs');
// Creates an instance of our models (DB collection).
const User = require('../../models/User');
const Video = require('../../models/Video');
const Comment = require('../../models/Comment');


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

  // Query all videos
  videos: async () => {
    try {
      const videos = await Video.find();
      return videos.map(video => {
        return { ...video._doc, _id: video.id };
      })
    } catch (err) {
      throw err
    }
  },

  // Query all comments
  comments: async () => {
    try {
      const comments = await Comment.find();
      return comments.map(comment => {
        return { ...comment._doc, _id: comment.id, createdAt: new Date(comment._doc.createdAt).toISOString(), updatedAt: new Date(comment._doc.updatedAt).toISOString() };
      })
    } catch(err) {
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
  },

  //Create a video
  createVideo: async (args) => {
    const video = new Video({
      title: args.videoInput.title,
      thumbnailURL: args.videoInput.thumbnailURL,
      videoURL: args.videoInput.videoURL,
      owner: args.videoInput.userID // Mongoose will convert this to Object ID
    })
    let ownedVideo;
    const res = await video.save();
    ownedVideo = { ...res._doc, _id: video.id };

    try {
      // Find the user associated who choose the video
      const user = await User.findById(args.videoInput.userID)
      if (!user) {
        throw new Error('User not found.');
      }
      user.ownedVideos.push(video); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await user.save();
      return ownedVideo;
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },

  //Create a comment
  createComment: async (args) => {
    const commenter = args.commentInput.commenterID
    const playlistOwner = args.commentInput.playlistOwnerID

    const comment = new Comment({
      content: args.commentInput.content,
      commenter: commenter,
      playlistOwner: playlistOwner
    })
    let newComment;
    const res = await comment.save();
    newComment = { ...res._doc, _id: comment.id, createdAt: new Date(comment._doc.createdAt).toISOString(), updatedAt: new Date(comment._doc.updatedAt).toISOString() };

    try {
      // Find the user who made the comment
      const commentingUser = await User.findById(commenter)
      if (!commentingUser) {
        throw new Error('User not found.');
      }
      commentingUser.userComments.push(newComment); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await commentingUser.save();


      // Find the user whose playlist has been commented on
      const playlistOwnerUser = await User.findById(playlistOwner)
      if (!playlistOwnerUser) {
        throw new Error('User not found.');
      }
      playlistOwnerUser.playlistComments.push(newComment); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await playlistOwnerUser.save();

      return newComment;
    } 
    catch (err) {
      console.log(err);
      throw err;
    }
  }
}