const objeto = {
    nome:'Nathan',
    idade: 19
}

const chaveNome = 'nome';
const chaveIdade = 'idade';

const obj = new Object();
obj.nome = 'Nathan';
obj.sobrenome = 'Silva';
obj.idade = 19;
delete obj.nome

obj.anoDeNascencia = function(){
    let ano = 2021 - this.idade;
    console.log('seu ano de nascencia é de ' + ano);
}



function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            configurable: true,
            writable: true
        }
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    });

    this.repoe = () =>{
        this.estoque - 1
        return;
    }
}

const p1 = new Produto('luva', 20, 10);
p1.repoe();
console.log(p1)