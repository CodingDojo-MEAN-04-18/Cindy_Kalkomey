const parser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json() );

app.use(express.static(path.join(__dirname, 'dist/fullexmpl')));

/* app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));*/

require('./server/config/database');

app.use('/api', require('./server/config/routes'));
app.use(require('./server/config/routes/catch-all.route'));


app.listen(port, () => console.log(`listening on port ${ port }`));
