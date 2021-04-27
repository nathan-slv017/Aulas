// agora com o prototype, não preciso mais fazer metodos dentro das construture function

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentoal){
    this.preco = this.preco - (this.preco *(percentoal /100));
};
Produto.prototype.almento = function (percentoal){
    this.preco = this.preco + (this.preco *(percentoal / 100))
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome:'Boneco',
    preco: 40
};
Object.setPrototypeOf(p2, Produto.prototype); // agora é possivel usar os metodos do Produto



//p1.almento(20)
//p1.desconto(30)
p2.almento(13);
console.log(p1);
console.group(p2);

function ContaDe(pipi, pupu){
    this.numero1 = pipi;
    this.numero2 = pupu;
}

ContaDe.prototype.soma = function (){
    console.log(this.numero1 + this.numero2);
}

const contaUm = new ContaDe(10,20);
contaUm.soma()

function ContaDu(pupu, pipi){
    this.numero1 = pipi;
    this.numero2 = pupu;
}


const contaDois = new ContaDu(20, 20);
Object.setPrototypeOf(contaDois, ContaDe.prototype);
contaDois.soma();