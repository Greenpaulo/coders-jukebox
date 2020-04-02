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
  createComment: async (args) => {
    // Check is user is authenticated
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    } 
    const commenter = req.userId
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