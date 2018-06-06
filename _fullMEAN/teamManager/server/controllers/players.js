// Player here is the model name that is exported in server -> models -> <resource>.js
const Player = require('mongoose').model('Player');

// these are server-side logic for each route defined in server -> config -> routes -> <resource>.routes.js
//Note: you'll see these console.log comments in the terminal window (where you're running > nodemon server.js)
module.exports = {

  // index route gets all players in database
  index(request, response) {
      console.log('CONTROLLER in config->controllers->players.js index');

      Player.find({})
			.then(players => response.json(players))
			.catch(console.log);
  		},


  	show(request, response) {
      console.log('CONTROLLER in config->controllers->players.js show w/ request.params:', request.params);

	  	Player.findById(request.params._id)
			.then(player  => response.json(player))
			.catch(console.log);
 	 	  },


  	update(request, response) {
      console.log('CONTROLLER in config->controllers->players.js update w/ request.body:', request.body);

	  	Player.findByIdAndUpdate(request.params._id,request.body, {new: true} )
			.then(player => response.json(player))
			.catch(error => {
		  	 const errors = Object.keys(error.errors).map(
		   	  key => error.errors[key].message
 		  	 );
		  	response.json(errors);
			});
      },


 	 	create(request, response) {
      console.log('CONTROLLER in config->controllers->players.js create w/ response:', response.body);
      // console.log('same place w request:', request);

      // this does a create on the mongodb model Player
      // Angular class having attribute names allows us to just pass request.body??
	  	Player.create(request.body)
			.then(player => response.json(player))
			.catch(error => {
		  	 const errors = Object.keys(error.errors).map(
		   	  key => error.errors[key].message
 		  	 );
		  	response.json(errors);
			});
      },


  	destroy(request, response) {
      console.log('CONTROLLER in config->controllers->players.js destroy w/ request.params:', request.params);

	  	Player.findByIdAndRemove(request.params._id)
			.then(player => response.json(player))
			.catch(console.log);
   		}
	};
