function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantidade){
    this.preco += quantidade;
};
Produto.prototype.desconto = function(quantidade){
    this.preco -= quantidade;
};

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor){
            if(valor !== 'number') return
            estoque = valor;
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('vingadore', 40, 'porcelana', 100);
caneca.estoque = 10

caneca.aumento(20);
console.log(caneca.estoque)
console.log(caneca);