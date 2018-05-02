const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 8000;
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


mongoose.connect('mongodb://localhost/rabbits');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const autoincrement = require('simple-mongoose-autoincrement');

const rabbitSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
    },
    age: {
        type: Number,
        required: [true, 'Ageis required'],
    }
},
// adds the createdAt and updatedAt fields
{ timestamps: true }
);

//adds an autoincremented field (rabbitID) to schema
rabbitSchema.plugin(autoincrement, {field: 'rabbitID'} )

// creates collection => rabbits
mongoose.model('Rabbit', rabbitSchema);

// assume different file
const Rabbit = mongoose.model('Rabbit');

// Use native promises -- do I need this? It was in the platform example
mongoose.Promise = global.Promise;

// Routes

// check! GET '/' Displays all of the rabbits.
// check! GET '/rabbits/:id' Displays information about one rabbit.
// check! GET '/rabbits/new' Displays a form for making a new rabbit.
// check! POST '/rabbits' Should be the action attribute for the form in the above route (GET '/rabbits/new').
//  check! GET '/rabbits/edit/:id' Should show a form to edit an existing rabbit.
// check! POST '/rabbits/:id' Should be the action attribute for the form in the above route (GET '/rabbits/edit/:id').
// POST '/rabbits/destroy/:id' Should delete the rabbit from the database by ID.

// Root Request -- render the index view 
// GET '/' Displays all of the rabbits.
app.get('/', function (req, res) {

    console.log('in the rabbits get route');

    Rabbit.find({}, function (err, rabbits) {
        if (err) {
            console.log('find rabbits resulted in an error', err);
        } else {
            console.log('found rabbits:', rabbits);
        }

        res.render("index", { rabbits });
    });

});

// GET '/rabbits/:id' Displays information about one rabbit.
app.get('/rabbits/:id', function (req, res) {

    console.log('in the rabbits get by id route for id:', req.params.id);

    Rabbit.findOne({rabbitID: req.params.id}, function(err, rabbitOne){

        if (err) {
            console.log('find rabbit by id resulted in an error', err);
        } else {
            console.log('found rabbit:', rabbitOne);
        }

        res.render("show", { rabbitOne });
    });
});

// // GET '/rabbits/new' Displays a form for making a new rabbit.
app.get('/rabbits/new', function(req, res) {

    console.log('in the rabbits/new get route');

    res.render( "new" );

});


// POST '/rabbits' Should be the action attribute for the form in the above route (GET '/rabbits/new').
app.post('/rabbits', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new rabbit  corresponding to data from req.body
    const rabbit = new Rabbit({ name: req.body.name, color: req.body.color, age: req.body.age });
    // Try to save that new rabbit to the database and run a callback function with an error (if any) from the operation.
    rabbit.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            res.render('new', { errors: rabbit.errors });
        }
        else {
            console.log('no errors -- saved rabbit:', rabbit);
            res.redirect('/');
        }
    });
});

// GET '/rabbits/edit/:id' Should show a form to edit an existing rabbit.
app.get('/rabbits/edit/:id', function (req, res) {

    console.log('in the rabbits/edit get by id route for id:', req.params.id);

    Rabbit.findOne({rabbitID: req.params.id}, function(err, rabbitOne){

        if (err) {
            console.log('find rabbit by id resulted in an error', err);
        } else {
            console.log('found rabbit:', rabbitOne);
        }

        res.render("edit", { rabbitOne });
    });
});


// POST '/rabbits/:id' Should be the action attribute for the form in the above route (GET '/rabbits/edit/:id').
app.post('/rabbits/:id', function (req, res) {
    console.log("edit rabbit", req.body);
    
    // find and update rabbit with id corresponding to data from req.body
    Rabbit.update( {rabbitID:req.params.id}, 
        {$set: {
            name: req.body.name,
            color: req.body.color,
            age: req.body.age
        }}, 
        function(err, rabbit){
            if (err) {
                res.render('edit', { errors: rabbit.errors });
            }
            else {
                console.log('no errors -- updated rabbit:', rabbit);
                const rt = `/rabbits/${req.params.id}`;
                res.redirect(rt);
            }
    });
});

// POST '/rabbits/destroy/:id' Should delete the rabbit from the database by ID.
app.post('/rabbits/destroy/:id', function (req, res) {
    console.log("destroy rabbit by id:", req.params.id);
    
    // find and remove rabbit with id corresponding to data from req.body
    Rabbit.remove( { rabbitID: req.params.id }, function(err){
        if (err) {
            console.log('removing rabbit was NOT successful', err);
        }
        else {
            console.log('no errors -- removed rabbit:', req.params.id);
        }
        res.redirect('/');
    });
});




app.listen(port, () => console.log(`express server listening on port ${port}`));