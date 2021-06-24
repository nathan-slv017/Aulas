const path = require('path');
const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
    console.log('the file is open');
});
const events = require('events');
const eventEmitter = new events.EventEmitter()