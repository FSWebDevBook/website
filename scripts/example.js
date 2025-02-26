const http = require("http");

function httpServer() {
    http.createServer(function (request, response) {        
        response.writeHead(200, {'Content-Type': 'text/plain'});    
        response.end('Hello World\n');
        }).listen(8081);
}

module.exports = {httpServer}
console.log('Server running at http://127.0.0.1:8081/');