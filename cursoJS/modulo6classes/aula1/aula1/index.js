// classes são quases iguais a constructore function 

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    fala() {

    }
    comer(){

    }
    beber(){
        console.log(`${this.nome} esta comendo.`);
    }
}
// instaciar um obejto é criar uma classe a partir dele
// já vai adicionar os metodos para o prototype automaticamente
const p1 = new Pessoa('nathan', 'silva');
const p2 = new Pessoa('Luiz' , 'MEME');
