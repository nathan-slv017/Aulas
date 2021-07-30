function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentoal){
    this.preco = this.preco - (this.preco *(percentoal /100));
};
Produto.prototype.aumento = function (percentoal){
    this.preco = this.preco + (this.preco *(percentoal / 100))
};

const p3 = Object.create(Produto.prototype, {
    preco: {
        value: 100,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

p3.aumento(20);
console.log(p3.preco)