const userController = require('../controllers/users');

module.exports = function(app) {
    // Create Routes here

    // GET route to display index page with registration and login forms 
    app.get('/', userController.index);


    app.post('/register',userController.register);


    app.post('/login', userController.login);


    app.get('/users', userController.users);


    app.get('/logout', userController.logout);

}
