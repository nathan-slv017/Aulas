//Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
    this.nomeCompleto =() => this.nome + " " + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Nathan', 'Silva'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Mario', 'A.');  // <- Pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);