class Person {
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }
    set nome(value){
        this._nome = value
    }
}

let eu = new Person('Nathan');

console.log(eu.nome)
eu.nome = 'Lucas'
console.log(eu.nome)