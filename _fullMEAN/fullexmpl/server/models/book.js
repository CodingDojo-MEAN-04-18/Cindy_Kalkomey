const mongoose = require('mongoose');

// example model info assuming a book-related applications
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  year: Number,
  pages: Number,

  genre: String,
  publisher: String,

  author: {
    type: String,
  }
},
{
  timestamps: true
}
);

// makes collection ==> books
module.exports = mongoose.model('Book', bookSchema);
