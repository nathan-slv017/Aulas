const pessoa = {
    //corpo do objeto
    nome:'Nathan' // essa é uma chave 
};
const chave = 'nome';
console.log(pessoa.nome); //acessando chave, ou, pessoa['nome];
console.log(pessoa[chave]);



const pessoa1 = new Object();
pessoa1.idade = '19'
pessoa1.nome = 'Nathan';
pessoa1.sobrenome = 'Silva';
delete pessoa1.sobrenome;
//console.log(pessoa1);
pessoa1.getDataNascimento = function (){
    let minhaIdade = Number(this.idade)
    ano = 2021;
    return console.log(`seu ano de nascimento é ${ano - minhaIdade}`);
}
pessoa1.falaNome = function () {
    console.log(`${this.nome}, este é o nome`);
}
pessoa1.getDataNascimento();
pessoa1.falaNome();

console.log('&&&&&&&&&&&&&&')

for( let chaves in pessoa1){
    console.log(chaves);
}

// quando as functions estão dentro de objetos nos a chamamos de metodos ou methods