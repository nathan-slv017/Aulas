const Cachorro = require('./mod1');

const bob = new Cachorro("Bob");
bob.latir(); 

module.exports = Cachorro;

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', '..'));
console.log(__filename);
console.log(__dirname);
// podemos exportar "Cachorro"

// ./ = pasta presente ../ voltar uma pasta 