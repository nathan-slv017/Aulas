// quando a gente compõe um objeto com varios objetos isso é chamado de 'composição'
const falar = {
    fala() {
        console.log(`${this.nome} está falando `);
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}
//const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber)



function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    } )
}
const p1 = criaPessoa('Nathan', 'Silva');
console.log(p1)