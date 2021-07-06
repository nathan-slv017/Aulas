const { alfabeto } = require('./ex');

// [abc]
// 
console.log(alfabeto.match(/[^abc123]+/g));
console.log(alfabeto.match(/[^0-3]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[\wçã]+/g));
