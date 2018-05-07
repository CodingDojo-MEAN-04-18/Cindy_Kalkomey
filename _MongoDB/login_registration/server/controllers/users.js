const User = require('mongoose').model('User');


module.exports = {

    index(request, response) {
        console.log('in the index get route');
  
        response.render('index');
    },



    login(request, response) {

        console.log('in login route w/ request.body: ', request.body);
        const log_error = '';

        // find user by email
        User.findOne({ email: request.body.email })
            .then ( user => {
                console.log('findOne returned with user=', user);

                if ( user === null ) { // handle returned null document THIS IS NOT WORKING! WHY NOT?
                    console.log('did not findOne for email: ', email);
                    response.render('index', {log_error: 'Email and/or password is incorrect'});

                } else { //found email so check for matdhing password
                    return User.verifyPassword( request.body.password, user.password)
                        .then( function() { //password matched so set session variables
                            request.session.userID = user._id;
                            request.session.name = user.first_name;
                            response.redirect('/users'); // go to results page
                        })
                }

            })

            .catch(error => { // catch any errors falling out from above
                console.log("password not verified error: ", error);
                response.render('index', { log_error: 'Email and/or password is incorrect' });

            });
        },
        


    register(request, response) {
        
        console.log('in the register post route');
        console.log('body:', request.body);

        User.create(request.body)
            .then( function( user ) {
                console.log('successully created user: ', user);

                // automatically log in user who successfully registered
                request.session.userID = user._id;
                request.session.name = user.first_name;

                response.redirect('/users');
            })
            .catch( function( err) {
                console.log('in User.create with error:', err.errors);
                response.render('index', { reg_errors: err.errors }); // Errors no longer displaying correctly since I added UserSchema.pre('save' ... to schema
            });
        },


    //placeholder page for future dashboard after login
    users(request, response) {
        console.log('in the users get route with session:', request.session);

          // check if the userID is set in  session (ie, not undefined)
            if ( typeof(request.session.UserID) == undefined ) {
                // if not set, redirect it to login page
                response.redirect('/');

            } else {
                User.find({})
                .then(users => {
                    response.render('users', { users, logged_in: request.session.name });
                })
                .catch(console.log);
            }
        },
    

    //logout route
    logout(request, response) {
        console.log('in the logout route');

        // clear session and return to login index page
        request.session.destroy();
        console.log('logged out and now session =', request.session);
        response.redirect('/');
        },

};
