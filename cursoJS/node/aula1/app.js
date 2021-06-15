const mod1 = require('./mode1');
const falaNome = require('./mode1').falaNome;
console.log(falaNome);
console.log(mod1.falaNome);

const {idade, profissao} = require('./mode1'); 
console.log(idade, profissao);