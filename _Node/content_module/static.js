module.exports = function static_contents(request, response)    {
    // get the http module:
    var http = require('http');
    // fs module allows us to read and write content for responses!!
    var fs = require('fs');

    function parseURL(strURL, f, p) 
        {
        // want to break out filename (incl path) and file type
        let partsURL = [];
        f = strURL;
        // split the url on '.' to get filetype
        partsURL = strURL.split('.');

        if (partsURL.length > 1) {
            f = partsURL[partsURL.length-1];
            p = strURL;
        } else {
            f = 'html';
            p = strURL + '.html';
        }

        //return ftype and path (via returnedObject)
        let returnedObject = {};
        returnedObject["ftype"] = f.toLowerCase();
        returnedObject["path"] = p;
        return returnedObject;
    };

    function serveContent(file, response, rspCode=200, typeContent='text/html') {
        console.log('within serveContent with \n file: ', file, 'rspCode:', rspCode, 'typeContent: ', typeContent);
        fs.readFile(file, function (errors, contents){
            console.log( "error: ", errors);
            
            // this isn't error handler isn't working ...
            if (errors) {
                console.log('errors withon ServeContent so serve up 404 page');
                console.log("content: ", contents);
                serveContent('./views/error_404.html', response, 404);
            }
            
            response.writeHead(rspCode, {'Content-Type': typeContent});
            response.write(contents); 
            response.end();
        });
    };
    
    let ftype;
    let path;

    //call parseURl to get filetype and path from request.url
    let parsedURL = parseURL(request.url, ftype, path);

    // define what file extensions are images
    let imgTypes = ['png', 'jpg', , 'jpeg', 'gif'];

    // if html file is requested
    if(parsedURL.ftype == 'html') {
        // prepend path with folder name storing views
        parsedURL.path = `./views${parsedURL.path}`;

        serveContent(parsedURL.path, response);
    }

    // if the stylesheet is requested
    else if(parsedURL.ftype == 'css'){
        parsedURL.path = `.${parsedURL.path}`;

        serveContent(parsedURL.path, response, 200, 'text/css');
    }

    // if an image file is requested
    else if(imgTypes.indexOf(parsedURL.ftype) > -1){
        parsedURL.path = `.${parsedURL.path}`

        let ctype =  (parsedURL.ftype == 'jpeg') ? 'image/jpg' : `image/${parsedURL.ftype}`;

        serveContent(parsedURL.path, response, 200, ctype);
    }
 
   // If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.
    else {
        serveContent('./views/error_404.html', response, 404);
    }
};

