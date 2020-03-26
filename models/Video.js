const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: String,
  thumbnailURL: String,
  videoURL: String,
  playlistID: {
    type: Schema.Types.ObjectId,
    ref: 'playlist'
  }
});

module.exports = mongoose.model('video', VideoSchema);