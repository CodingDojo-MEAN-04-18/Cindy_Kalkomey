// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var session = require('express-session');

// original code:
var app = express();

// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// root route to render the index.ejs view
app.get('/', function(req, res) {
    console.log(' in get route for index');

    res.render("index");
})


// route to process reset button:
app.post('/result', function (req, res){

    console.log('post route -- /result');

    // normally should not reder in a post route
    res.render("result", {name: req.body.name, location: req.body.location, language: req.body.fav_language, comment: req.body.comment} );
});


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
