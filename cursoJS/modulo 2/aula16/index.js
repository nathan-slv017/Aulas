const pessoa = {
    nome:'Luiz',
    sobrenome:'Silva',
    idade: 30,
    endereco:{
        rua:' Amador Buéno',
        numero:48
    }
};

const { nome: teste, sobrenome: teste2 } = pessoa;
console.log(teste, teste2);

const {endereco:{ rua, numero}} = pessoa;
console.log(rua, numero);