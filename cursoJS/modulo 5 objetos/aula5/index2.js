/*
Javascript é basead em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se refirir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo(__proto__)
que vem da propriedade prototype de função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encontrar este membro no próprio objeto  e depois a cadeia
de protótipos é uasa até o topo (null) até encontrar (ou não) tal membro.
 */
function P1(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
   //  this.nomeCompleto = () =>'ORIGINAL: ' + this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === p1.__proto__

P1.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome + 'Agora pelo prototype'
}
// Pessoa.prototype === p1.__proto__

const p1 = new P1('Nathan', 'Silva');

const data = new Date();
console.log(data);
console.dir(p1.nomeCompleto());

// p1 --> P1.prototype --> Object.prototype