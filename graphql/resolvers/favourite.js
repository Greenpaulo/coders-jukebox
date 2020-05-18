const User = require('../../models/User');

module.exports = {

  //Create a video
  addFavourite: async (args, req) => {
    // Check is user is authenticated
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }

    try {
      // Find the user
      const user = await User.findById(req.userId)
      if (!user) {
        throw new Error('User not found.');
      }
      // Check is the id is already a favourite
      if (user.favourites.includes(args.id)) {
        throw new Error('This user is already a favourite!')
      }
      // Push the new favourite user id onto their favourites array
      user.favourites.push(args.id); // We can pass the object and mongoose will pull out the id as defined in our User schema.
      await user.save();

      // Return the updated user object
      return user;
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },

  // //Remove a video
  // removeVideo: async (args, req) => {
  //   // Check is user is authenticated
  //   if (!req.isAuth) {
  //     throw new Error('Unauthenticated!');
  //   }

  //   // Remove the video from the user's ownedvideos array
  //   try {
  //     // Find the user associated who choose the video
  //     const user = await User.findById(req.userId)
  //     if (!user) {
  //       throw new Error('User not found.');
  //     }

  //     // Filter the video from their ownedVideos array
  //     const updatedVideos = user.ownedVideos.filter(video => video._id != args.id);

  //     user.ownedVideos = updatedVideos;

  //     await user.save();

  //     // Remove the video from the videos collection 
  //     await Video.deleteOne({ _id: args.id });

  //     // Return the updated user object
  //     return user;
  //   }
  //   catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // }


}