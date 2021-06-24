// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    

    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco:{
            enumerable:true,
            value: preco,
            configurable: true,
            writable: true
        }
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // para permitir que o valor seja aucançavel/ mostra chave para for in
        value: estoque, // mostrar valor
        writable: false, // não permitido para modificar, com true, sim 
        configurable: true, // Configuravel
    });

    // reconfigurando com o configurable true
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    });
}
const p1 = new Produto('luva', 20, 10);
p1.estoque  = 300
console.log(p1);
console.log(Object.keys(p1)); 