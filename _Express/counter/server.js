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
    // console.log(' in get route for index');
    // initialize seesion var that will count views on index
    if(!req.session.cnt) {
        req.session.cnt = 1;
    } else {
        req.session.cnt++;
    }
    // console.log( 'req.session.cnt: ', req.session.cnt);
    res.render("index", {cnt: req.session.cnt});
})

// route to process +2 button:
app.post('/add2', function (req, res){
    // console.log("+2 POST DATA \n\n", req.body)
    // initialize seesion var that will count views on index if needed; else bump by an extra 1 (in addition to bump that will occur when redirected back to GET route)
    if(!req.session.cnt) {
        req.session.cnt = 1;
    } else {
        req.session.cnt++;
    }
    res.redirect('/')
});

// route to process reset button:
app.post('/reset', function (req, res){
    //console.log("reset POST DATA \n\n", req.body)

    // reset counter to -1 so that when redirected to GET route and 1 is added, counter will be zero
    req.session.cnt = -1;

    res.redirect('/')
});

// tell the express app to listen on port 8000
app.listen(5000, function() {
 console.log("listening on port 5000");
});
