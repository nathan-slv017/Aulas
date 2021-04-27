//Produto -> aumento, deconto 
//Camiseta = Cor, caneca = material

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

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor
};
Camiseta.prototype = Object.create(Produto.prototype); // esse comando vai permitir que o prototype de camiseta seja o mesmo de produto.
Camiseta.prototype.constructor = Camiseta; // e esse comando faz com que o constructor não seja o produto em sí, mas volte para camiseta.

Camiseta.prototype.aumento = function (porcent){
    this.preco = this.preco + (this.preco * (porcent / 100)); // posso modificar as funções em cada variedade
}

const camiseta = new Camiseta('Hollister', 120, 'preta');
camiseta.desconto(29);
console.log(camiseta);