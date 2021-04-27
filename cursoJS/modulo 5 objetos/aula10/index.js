// Polimorfismo e fazer Metodos se comportarem de maneira diferente

// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){
     if(this.saldo < valor){
         console.log(`Saldo insuficiente R$${this.saldo.toFixed(2)}`)
         return;
     }

     this.saldo -= valor;
     this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
};
Conta.prototype.verSaldo = function() {
    console.log(
    `Ag/c.:${this.agencia}/${this.conta} ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); // herança
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); // herança
    
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP

const contaCorrente1 = new ContaCorrente(11, 22, 300, 600);
contaCorrente1.depositar(880);
contaCorrente1.sacar(30);

console.log();
const cp = new CP(12, 36, 0);

cp.depositar(100);
cp.sacar(120);