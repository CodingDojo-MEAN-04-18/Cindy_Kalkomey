// Product here is the model name that is exported in server -> models -> <resource>.js
const Product = require('mongoose').model('Product');

// these are server-side logic for each route defined in server -> config -> routes -> <resource>.routes.js
//Note: you'll see these console.log comments in the terminal window (where you're running > nodemon server.js)
module.exports = {
  index(request, response) {
      console.log('CONTROLLER in config->controllers->products.js index');
 	  	Product.find({})
			.then(products => response.json(products))
			.catch(console.log);
  		},

  	show(request, response) {
	  	Product.findById(request.params._id)
			.then(product  => response.json(product))
			.catch(console.log);
 	 	  },

  	update(request, response) {
	  	Product.findByIdAndUpdate(request.params._id,request.body, {new: true} )
			.then(product => response.json(product))
			.catch(error => {
		  	 const errors = Object.keys(error.errors).map(
		   	  key => error.errors[key].message
 		  	 );
		  	response.json(errors);
			});
      },

 	 	create(request, response) {
      console.log('CONTROLLER in config->controllers->products.js create w/ response:', response.body);
      // console.log('same place w request:', request);

      // does a create on the mongodb model Product
      // I believe by  Angular having same attribute names on its class (src -> app-> product_item.ts), that allows us to just pass create the request.body
	  	Product.create(request.body)
			.then(product => response.json(product))
			.catch(error => {
		  	 const errors = Object.keys(error.errors).map(
		   	  key => error.errors[key].message
 		  	 );
		  	response.json(errors);
			});
      },

  	destroy(request, response) {
      console.log('CONTROLLER in config->controllers->products.js destroy w/ request.params:', request.params);

	  	Product.findByIdAndRemove(request.params._id)
			.then(product => response.json(product))
			.catch(console.log);
   		}
	};
