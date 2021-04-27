const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numero; // ...x operador rest

console.log(primeiroNumero, segundoNumero, resto)

const [um, , tres, , cinco, , sete] = numero
console.log(um, tres, cinco, sete)

const Maisnumeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[, ,seis]] = Maisnumeros;
console.log(seis)