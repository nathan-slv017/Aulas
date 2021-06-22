const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    });
}).listen(8080);
fs.open('meuNote.txt', 'w', (err, file) =>{
    if(err) throw err;
    console.log('Saved!');
})