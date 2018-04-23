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
    console.log("==========================================================================================================");
    console.log('client request ', request);
    

    function serveContent(file, response, rspCode=200, typeContent='text/html') {
        fs.readFile(file, function (errors, contents){
            // console.log( "error: ", errors);
            // console.log("content: ", contents);
            // response.writeHead(rspCode, {'Content-Type': typeContent});
            response.write(contents); 
            response.end();
        });
    }

  
    // localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars, stored locally.
    if(request.url === '/cars') {
        serveContent('views/cars.html', response);
    }

    // localhost:7077/cats show a simple HTML page with some cool pictures of cats, stored locally.
    else if (request.url === "/cats") {
        serveContent('views/cats.html', response);
    }

    // localhost:7077/cars/new   show a simple form where the user can add a new car information.
    else if (request.url === "/cars/new") {
        serveContent('views/add_car.html', response);
    }

    // if the stylesheet is requested

    else if(request.url === '/stylesheets/style.css'){
        serveContent('./stylesheets/style.css', response,200, 'text/css');
    }

// if an image file is requested
    else if (request.url.startsWith("/images")) {
        const imgfile = request.url.slice(8, request.url.length);
        serveContent('./images/'+imgfile, response, 200, 'image/jpg');
    }   

   // If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.
    else {
        serveContent('views/error_404.html', response, 404);
    }
});

// tell your server which port to run on
server.listen(7707);
// print to terminal window
console.log("Running in localhost at port 7707");
