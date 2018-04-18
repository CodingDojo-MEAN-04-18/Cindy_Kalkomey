// Assignment: Landing Page: Create a small node server capable of handling the following request URLs:
// * localhost:6789/    This route should serve a view file called index.html and display a greeting.
// * localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// * localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
// If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
  
    // * localhost:6789/    This route should serve a view file called index.html and display a greeting.
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    // * localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas
    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    // * localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to)
    else if (request.url === "/dojos/new") {
        fs.readFile('dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    
   // If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.
    else {
        fs.readFile('error_404.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
