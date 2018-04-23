// Assignment: Cars and Cats: We are going to make another node server in this assignment, but we are going to complicate it. Create a folder called cars_and_cats, this will be your root folder for this project.  Within this folder, create:
// * A file called app.js.  This is where you will build your node server.
// * A folder called views.  This is where you will keep your HTML files.
// * A folder called images for images.
// * A folder called stylesheets for CSS.
// Your server must be capable of handling the following URL requests:
// * Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars, stored locally.
// * Have localhost:7077/cats show a simple HTML page with some cool pictures of cats, stored locally.
// * Have localhost:7077/cars/new   show a simple form where the user can add a new car information.

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);


    // localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars, stored locally.
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    // localhost:7077/cats show a simple HTML page with some cool pictures of cats, stored locally.
    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
        });
    }

    // localhost:7077/cars/new   show a simple form where the user can add a new car information.
    else if (request.url === "/cars/new") {
        fs.readFile('views/add_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    // if the stylesheet is requested

    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
      }

// if an image file is requested
    else if (request.url.startsWith("/images")) {
        const imgfile = request.url.slice(8, request.url.length);
        // notice we won't include the utf8 encoding
        fs.readFile('./images/'+imgfile, function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }   



   // If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.
    else {
        fs.readFile('views/error_404.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
});

// tell your server which port to run on
server.listen(7707);
// print to terminal window
console.log("Running in localhost at port 7707");
