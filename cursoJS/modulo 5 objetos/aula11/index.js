// factory funtion + prototype

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        fala(){
            console.log(`${this.nome} esta falando.`);
        },
        comer(){
            console.log(`${this.nome} esta comendo.`);
        },
        beber(){
            console.log(`${this.nome} esta bebendo.`);
        },
    }
    return  Object.create(pessoaPrototype, {
        nome: {value : nome},
        sobrenome: {value : sobrenome}
    });
}
const p1 = criaPessoa('luiz', 'silva');
console.log(p1);
const p2 = criaPessoa('nathan', 'silva');
console.log(p2);