const parser = require('body-parser');
const express = require('express');
const path = require('path');

//this defines which 8000 to view the full MEAN application on
const port = process.env.PORT || 8000;

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json() );

app.use(express.static(path.join(__dirname, 'dist/productProjectMgmt')));

//require(path.resolve('server', 'config', 'database'));
require('./server/config/database');

// require(path.resolve('server', 'config', 'routes'))(app);
//load and use routes file
app.use('/api', require('./server/config/routes'));
// this line is to reconcile conflicts between server-side routing (above) and client-side routing of Angular
app.use(require('./server/config/routes/catch-all.route'));

app.listen(port, () => console.log(`listening on port ${ port }`));
