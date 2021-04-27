// função construtora  -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('nathan', 'silva')
console.log(p1)
p1.metodo();  