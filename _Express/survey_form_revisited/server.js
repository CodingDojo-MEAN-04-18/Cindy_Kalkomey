// For this  app"
// 1. Server render views/index.ejs with survey form
// 2. User submits form
// 3. Form information EMITTED to server with event name 'posting_form'
// 4. Server listens for an event 'posting_form' and when triggered, organizes emitted information into single message and sends this single message with the event called 'updated_message'. It also EMITs an event called 'random_number' with random number between 1-1000.
// 5. Client listens for event called 'random_number' and when this event gets triggered, shows the number in the HTML.
// 6. Client also listens for an event called 'updated_message' and when triggered, displays the message in the HTML

// Import express and path modules.
var express = require( "express");
var path = require( "path");

const port = process.env.PORT || 8000;

const util = require('util');

// Create the express app.
var app = express();

// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));

// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    console.log(' in get route for index');

    res.render("index");
})

// route to process submit button:
// app.post('/result', function (req, res){

//     console.log('post route -- /result');
//     res.render("result", {name: req.body.name, location: req.body.location, language: req.body.favlanguage, comment: req.body.comment} );
// });

// Start Node server listening on port
var server = app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
   });
   var io = require('socket.io').listen(server);
   
   io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);

        // all the server socket code goes in here
        socket.on( "posting_form", 
        function (data){
            console.log( 'Someone submitted form data with data:') ;
            console.log(data);

            //organize emitted information into single message
            const message = `You emitted the following message to the server:  ${ util.inspect(data, false, null) }`;
            console.log(message);
            socket.emit( 'updated_message', 
            {message:  message});

            // also EMIT an event called 'random_number' with random number between 1-1000
            const randnum = Math.floor(Math.random()*1000+ 1);
            socket.emit( 'random_number', 
            {randnum:  randnum});
        })
    })