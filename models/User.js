const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  jobTitle: String,
  location: String,

  // The videos choosen by the user
  ownedVideos: [
    {
    type: Schema.Types.ObjectId,
    ref: 'video',
    autopopulate: true
    }
  ],
  // The comments made by the user
  userComments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
      autopopulate: true
    }
  ],
  // The comments on the user's playlist
  playlistComments: [
    {
    type: Schema.Types.ObjectId,
    ref: 'comment',
    autopopulate: true
    }
  ],
  // Favourite users
  favourites: [
    {
    type: Schema.Types.ObjectId,
    ref: 'user'
    }
  ]
});

UserSchema.plugin(autopopulate);

module.exports = mongoose.model('user', UserSchema);