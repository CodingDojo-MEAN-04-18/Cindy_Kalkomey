const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const session = require('express-session');

// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
const path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// set up session
const sessionConfig = {
    secret: 'CindysSecretKey',
    resave: false,
    saveUninitialized: true,
    name: 'CindysCookie',
    cookie: { 
        secure: false,
        httpOnly: false,
        maxAge: 600000 
    }
};

app.use(session(sessionConfig));


require(path.resolve('server', 'config', 'database'));
require(path.resolve('server', 'config', 'routes'))(app);


app.listen(port, () => console.log(`express server listening on port ${port}`));