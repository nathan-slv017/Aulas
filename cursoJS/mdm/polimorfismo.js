// Super Class
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return;
    } 

    this.saldo -= valor;
    this.verSaldo()
};


Conta.prototype.depositar = function (valor) {
    this.saldo += valor 
    this.verSaldo()   
}
Conta.prototype.verSaldo = function () {
    console.log(
    `Ag/c:${this.agencia}/${this.conta} ` +
    `Saldo: R$:${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(11,22,400);
conta1.sacar(30);
console.log(conta1);


function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC
// aki reescrevemos um metodo para a variação de conta corrente
CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return;
    } 

    this.saldo -= valor;
    this.verSaldo()
};

const contaCorrente1 = new CC(22, 44, 300, 200);
contaCorrente1.sacar(400);


function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
    
}
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const contaPoupanca = new CP(40,19, 0);
contaPoupanca.depositar(20);
