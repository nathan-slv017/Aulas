// Array passados por referencia
const nome =['nathan', 'luiz', 'vini'];
nome[2] = 'paulo'
delete nome[2];
console.log(nome);

const abr = ['Eduardo', 'silva', 'Paulo'];
const bip = [...abr];
bip.pop();
console.log( abr, bip);

const funcionarios = ['Rodrigo', 'Pedro', 'Jonas'];
const removido = funcionarios.shift(); // unshift para adicionar ementos no começo do array
console.log(funcionarios, removido);

const bibi = ['1', '2', '3', '4'];
const bubu = bibi.slice(0, -1);
console.log(bubu);

const meuNome = 'Nathan da Silva Barrozo';
const MeuNome = meuNome.split(' ')
console.log(MeuNome)