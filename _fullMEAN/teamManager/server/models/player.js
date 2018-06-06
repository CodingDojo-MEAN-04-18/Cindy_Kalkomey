const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  player_name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    pref_position: {
      type: String,
      required: false
    },
    game1_status: {
      type: String,
      required: true
    },
    game2_status: {
      type: String,
      required: true
    },
    game3_status: {
      type: String,
      required: true
    },
  },
{
    timestamps: true
}
);
// makes collection ==> players
module.exports = mongoose.model('Player', playerSchema);


