// Note here is the model name that is exported in server -> models -> <resource>.js
const Note = require('mongoose').model('Note');

// these are server-side logic for each route defined in server -> config -> routes -> <resource>.routes.js
//Note: you'll see these console.log comments in the terminal window (where you're running > nodemon server.js)
module.exports = {
  // route to find all notes in db
  index(request, response) {
    console.log('CONTROLLER in config->controllers->notes.js index');
 	  Note.find({})
			.then(notes => response.json(notes))
			.catch(console.log);
  		},

  // route to create note in db
 	create(request, response) {
    console.log('CONTROLLER in config->controllers->notes.js create w/ response:', response.body);

    // does a create on the mongodb model Note
    // I believe by  Angular having same attribute names on its class (src -> app-> note.ts), that allows us to just pass create the request.body
	  Note.create(request.body)
			.then(note => response.json(note))
			.catch(error => {
		  	 const errors = Object.keys(error.errors).map(
		   	  key => error.errors[key].message
 		  	 );
		  	response.json(errors);
			});
      },

	};
