// O this se refere ao objeto inteiro
// esse exemplo é uma factory function
function criaPessoa(nome, idade, a, p) {
    return {
        nome: nome,
        idade: idade,
        fala(assunto) {
            return `${this.nome}, está ${ assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2);
        }
    }
}
const p1 = criaPessoa('Nathan', 19, 1.72, 70);
const p2 = criaPessoa('Larissa', 20, 1.68, 70);
console.log(p2.fala('Falando besteira'))
console.log(p1.fala('Falando sobre JS'));
console.log(p1.imc());
console.log(p2.imc());