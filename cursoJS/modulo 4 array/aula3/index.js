// metodo concat serve para concatenar arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat( a2, [7, 8, 9], 'luiz');
// agora com ...rest -> e ...spread
const a3 = [...a1, ...a2, 'luiz', ...[1,2,3]];
console.log(a3);