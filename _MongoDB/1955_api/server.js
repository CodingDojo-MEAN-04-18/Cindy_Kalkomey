// Assignment: 1955 API: build a simple API server and communicate with it directly over URL requests. The purpose of this API server is to hold on to a list of people born in the year 1955. In order to allow our API server full functionality over URL, we'll need to make sure all our incoming requests come in as GETs, so don't worry about making your routes RESTful!

const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT  || 8000;
const app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// add this to tell body-parser to read JSON
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/quotes');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required!!!'],
        minlength: [5, 'Name must be at least 5 chars']
    }
},

{
    timestamps: true,
}
);

// creates collection => animals
mongoose.model('Person', personSchema);

// assume different file
const Person = mongoose.model('Person');

// Use native promises -- do I need this? It was in the platform example
mongoose.Promise = global.Promise;



// ROUTES

//   GET '/' will serve up the full collection of people born in 1955
app.get('/', function(req, res) {
    console.log('in the index get route');

    Person.find( {} )
        .then( persons => {
            console.log('found persons: ', persons);
            // respond with JSON
            res.json({message: "Success", persons});
        }) //end then

        .catch( err => {
            console.log('Returned error: ', err);
            // respond with JSON
            res.json( {message: 'Error', error: err} );
        }) //end catch
});


//   GET '/new/:name/' will add a name into the database which can be used for blank spaces. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
app.get('/new/:name', function(req, res) {
    console.log('in the new get route');

    const newperson = new Person({
        name: req.params.name,
    });

    newperson.save( {} )
        .then( newperson=> {
            console.log('saving new person: ', newperson);
            // respond with JSON
            res.json({message: "Success saved", newperson});
        }) //end then

        .catch( err => {
            console.log('Returned error: ', err);
            // respond with JSON
            res.json( {message: 'Error', error: err} );
        }) //end catch
});


//   GET '/remove/:name/' will delete a name from the database.
app.get('/remove/:name', function(req, res) {
    console.log('in the remove get route');

    Person.remove( { name: req.params.name })
        .then( person=> {
            console.log('removing person: ', person);
            // respond with JSON
            res.json({message: "Success removed", person});
        }) //end then

        .catch( err => {
            console.log('Returned error: ', err);
            // respond with JSON
            res.json( {message: 'Error', error: err} );
        }) //end catch
});


//   GET '/:name' will bring up the document of that particular person.
app.get('/:name', function(req, res) {
    console.log('in the index get name route');

    Person.findOne( { name: req.params.name } )
        .then( person => {
            console.log('found person: ', person);
            // respond with JSON
            res.json({message: "Success", person});
        }) //end then

        .catch( err => {
            console.log('Returned error: ', err);
            // respond with JSON
            res.json( {message: 'Error', error: err} );
        }) //end catch
});


app.listen( port, () => console.log( `express server listening on port ${ port}` ) );