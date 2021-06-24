// o getter para obter o valor e o setters para configurar o valor
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado
        }, 
        set: function (value){
            if(typeof value != 'number'){
                throw new TypeError('Bug na matriz');
            }
            estoquePrivado = value;
        }
    })
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 400;
console.log(p1.estoque);
