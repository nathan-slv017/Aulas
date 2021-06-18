const path = require("path");

console.log(process.env.PATH);
console.log(path.resolve(__dirname, '..', '..'));
console.log(path.extname('index.js'))
const format = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base:'file.txt'
})
console.log(format)

console.log(path.isAbsolute('/bar/'));
console.log(path.join('/foo', 'bar'));
console.log(path.parse('/home/user/dir/file.txt'));