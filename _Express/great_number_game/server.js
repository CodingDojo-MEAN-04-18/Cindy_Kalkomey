const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

app.use(session({secret: 'codingdojorocks'}));  // string for encryption

// setting up ejs and our views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// root route to render the index.ejs view
app.get('/', function(request, response) {
    // console.log('routing root', request);
    if(!request.session.guess) {
        request.session.guess = 0;
        request.session.curr_rdm = randomIntFromInterval(1,100);
        request.session.state = "initial";
    }
    response.render('index', {curr: request.session.curr_rdm, state: request.session.state});
  });


// route to process guess
app.post('/process', function (request, response){
    request.session.guess = request.body.guess;
    if(request.session.guess < request.session.curr_rdm) {
        request.session.state = "Too low";
    } else if (request.session.guess > request.session.curr_rdm) {
        request.session.state = "Too high";
    } else {
        request.session.state = "correct";
    }
    response.redirect('/')
});

// route to process playagain
app.post('/playagain', function (request, response){
    request.session.guess = 0;
    request.session.curr_rdm = randomIntFromInterval(1,100);
    request.session.state = "initial";
    response.redirect('/')
});


// tell the express app to listen on port 8000
app.listen(port, () => console.log(`Express server listening on port ${port}`));
//

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


