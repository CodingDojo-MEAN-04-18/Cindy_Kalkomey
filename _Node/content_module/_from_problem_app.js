//http server
const http = require('http');
const fs   = require('fs');
//creating a server
server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  if(request.url === '/'){
    fs.readFile('views/index.html', 'utf8', function (errors, contents) {
      response.write(contents); 
      response.end();
    });
  } else if(request.url === '/dojo.html'){
    fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/stylesheet/style.css'){
    fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
      response.write(contents);
      response.end();
    });
  } else {
      response.end('File not found!!!');
  }
});
server.listen(8000);
console.log("Running in localhost at port 8000");





// After your change (or after you create your static.js in the modules folder), your app.js would look like the following:

// http server
const http = require('http');
const   fs = require('fs');
// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './static.js' just refers to a file called static.js
const static_contents = require('./static.js');
//
//creating a server
server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");