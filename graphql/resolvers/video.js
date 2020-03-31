const User = require('../../models/User');
const Video = require('../../models/Video');

module.exports = {
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
  }

  
}