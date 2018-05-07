const mongoose = require('mongoose');
// Require path
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

// Use native promises -- gets rid of deprecation warning
mongoose.Promise = global.Promise;

// connect to database
mongoose.connect('mongodb://localhost/users');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});