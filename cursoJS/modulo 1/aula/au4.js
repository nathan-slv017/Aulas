let varA = 'a';
let varB = 'b';
let varC = 'c';

const bba = varA;

varA = varB;
varB = varC
varC = bba
console.log(varA, varB, varC)