const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
// const modelsPath = path.join(__dirname, '../models');
const modelsPath = path.resolve('server', 'models');

// connect to database
console.log('DATABASE in server->config->database.js');

// this connects to whatever the database is named here (or what you want it to be named if it has not yet been created). The db name is not referenced in the code anywhere else. It is named soccerplayers here.
mongoose.connect('mongodb://localhost/soccerplayers');
mongoose.connection.on('connected', () => console.log('DATABASE Connected to MongoDB soccerplayers'));

// if running Mongoose version < 5.0, you want to chg to use global Promise
mongoose.Promise = global.Promise;

// get path for each model js file in models dir
// if a production db, would need to provide authentication params as part of connect
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
      require(path.join(modelsPath, file));
  }
});
