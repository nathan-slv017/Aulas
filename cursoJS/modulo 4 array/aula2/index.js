const nomes = ['Marria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-2, 1 );// Number.MAX_VALUE para ir até o valor maximo

console.log(nomes, removidos)
console.log(Number.MAX_VALUE);