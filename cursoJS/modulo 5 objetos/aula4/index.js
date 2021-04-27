/* alguns metodos para objetos
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/


const produto = { nome:'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    value:'Caneca',
    writable: false,
    enumerable: true,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
