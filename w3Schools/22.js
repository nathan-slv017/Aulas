const produto = { nome:'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    value: 'Fone ouvido',
    writable: false,
    enumerable: true,
    configurable: true
});
const outroObjeto = { sobrenome: 'silva'}
const maisOutroObjeto = {ultimo: 'barrozo'}
console.log(Object.values(produto));
console.log(Object.entries(produto));

console.log(Object.assign(produto, outroObjeto, maisOutroObjeto));
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.keys(produto));
Object.freeze(produto);