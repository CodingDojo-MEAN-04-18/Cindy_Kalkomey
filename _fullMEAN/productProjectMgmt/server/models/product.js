const mongoose = require('mongoose');
	const { Schema } = mongoose;

	const productSchema = new Schema({
    productid: Number,
 		title: {
  		  type: String,
    		required: true,
  		  trim: true,
   		  minlength: 4,
  		},
  		price:  {
        type: Number,
        required: true,
      },
  		image: {
        type: String,
        trim: true,
      },
      active: {
        type: Boolean,
      }
    },
	{
  		timestamps: true
	}
	);
	// makes collection ==> products
  module.exports = mongoose.model('Product', productSchema);


