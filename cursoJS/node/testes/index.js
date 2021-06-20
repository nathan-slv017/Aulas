const http = require('http');
const hoje = require('./date/myDateTime');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('esse -- o meu servidor');
}).listen(8080);
console.log(hoje);
