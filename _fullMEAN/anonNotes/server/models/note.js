const mongoose = require('mongoose');
	const { Schema } = mongoose;

	const noteSchema = new Schema({
 		content: {
  		  type: String,
    		required: true,
  		  trim: true,
   		  minlength: 3,
  		},

    },
	{
  		timestamps: true
	}
	);
	// makes collection ==> notes
  module.exports = mongoose.model('Note', noteSchema);


