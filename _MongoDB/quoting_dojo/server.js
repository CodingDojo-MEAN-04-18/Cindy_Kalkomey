const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT  || 8000;
const app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var moment = require('moment');

mongoose.connect('mongodb://localhost/quotes');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!!!'],
        minlength: [5, 'Namemmust be at least 5 chars']
    },
    quote: {
        type: String,
        required: [true, 'Quote is required!!!'],
        minlength: [20, 'Quote must be at least 20 chars']
    } 
    },
    // adds the createdAt and updatedAt fields
    {timestamps: true} 
);


// creates collection => animals
mongoose.model('Quote', quoteSchema);

// assume different file
const Quote = mongoose.model('Quote');

// Use native promises -- do I need this? It was in the platform example
mongoose.Promise = global.Promise;

// Routes
// Root Request -- render the index view 
app.get('/', function(req, res) {

    console.log('in the index get route');

    res.render("index" );

});


// Add Quote Request 
// When the user presses the submit button on index.ejs it should send a post request to '/add_quote'. 
// add quote to the database and then redirect to quotes view.
app.post('/add_quote', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new Quote with the name and quote corresponding to those from req.body
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    // Try to save that new quote to the database and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err){
            res.render('index', {errors: quote.errors});
        }
        else {
            console.log('no errors -- saved quote:', quote);
            res.redirect('quotes');
        }
    });
});


// route to get and display quotes
app.get('/quotes', function(req, res) {

    console.log('in the quotes get route');

    Quote.find({}).sort({createdAt: 'desc'}).exec(function(err, quotes) {
        if (err) {
            console.log('find quotes resulted in an error', err);
        } else {
            console.log('found quotes:', quotes);
        }
 
        res.render("quotes", {quotes} );
    });

});


app.listen( port, () => console.log( `express server listening on port ${ port}` ) );