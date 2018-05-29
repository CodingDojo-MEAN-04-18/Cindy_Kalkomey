const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
// const modelsPath = path.join(__dirname, '../models');
const modelsPath = path.resolve('server', 'models');

// connect to database (assuming it's named books here)
// if a production db, would need to provide authentication params as part of connect
mongoose.connect('mongodb://localhost/books');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

// if running Mongoose version < 5.0, you want to chg to use global Promise
mongoose.Promise = global.Promise;

// get path for each model js file in models dir
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
