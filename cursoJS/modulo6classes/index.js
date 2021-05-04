function ContaDe (numero1, numero2){
        this.numero1 = numero1
        this.numero2 = numero2
    }
     soma = function(){
        console.log(this.numero1 + this.numero2);
    }

const contaUm = new ContaDe(30, 20);
contaUm.soma;

function ContaDois(numero1, numero2){
    this.numero1 = numero1
    this.numero2 = numero2
}
ContaDois.prototype = Object.create(ContaDe.prototype);
const contaDois = ContaDois(10, 15);
