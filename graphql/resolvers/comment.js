const User = require('../../models/User');
const Comment = require('../../models/Comment');

module.exports = {
  // Query all comments
  comments: async () => {
    try {
      const comments = await Comment.find();
      return comments.map(comment => {
        return { ...comment._doc, _id: comment.id, createdAt: new Date(comment._doc.createdAt).toISOString(), updatedAt: new Date(comment._doc.updatedAt).toISOString() };
      })
    } catch (err) {
      throw err
    }
  },

  //Create a comment
  createComment: async (args, req) => {
    // Check is user is authenticated
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    } 
    const commenter = req.userId
    const playlistOwner = args.commentInput.playlistOwnerId

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
        throw new Error('Commenting user not found.');
      }
      commentingUser.userComments.push(newComment); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await commentingUser.save();


      // Find the user whose playlist has been commented on
      const playlistOwnerUser = await User.findById(playlistOwner)
      if (!playlistOwnerUser) {
        throw new Error('Playlist owner not found.');
      }
      playlistOwnerUser.playlistComments.push(newComment); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await playlistOwnerUser.save();

      return newComment;
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },


  //Remove a comment
  removeComment: async (args, req) => {
    // Check is user is authenticated
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }

    // Remove the comment from the associated userComments array and the playlistComments array
    
    try {
      // Find the user who made the comment - i.e. the logged in user
      const user = await User.findById(req.userId)
      if (!user) {
        throw new Error('User not found.');
      }
      // Filter the comment from their userComments array
      const updatedComments = user.userComments.filter(comment => comment._id !== args.id);
      
      user.userComments = updatedComments;
      
      await user.save();
      
      
      // Find the playlist user
      const playlistOwner = await User.findById(req.playlistOwnerId)
      if (!user) {
        throw new Error('User not found.');
      }
      // Filter the comment from their userComments array
      const updatedPlaylistComments = playlistOwner.playlistComments.filter(comment => comment._id !== comment.id);
      
      playlistOwner.playlistComments = updatedPlaylistComments;
      
      await playlistOwner.save();
      
      // Remove the comment from the comments collection 
      await Comment.deleteOne({ _id: args.id });

      return playlistOwner;
      
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
}