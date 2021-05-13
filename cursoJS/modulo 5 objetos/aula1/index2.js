// factory function / Constructor functions // classes para criar novos objetos;

function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
         console.log('Nathan')
        }
    }
}
const p1 = criaPessoa();
p1.nomeCompleto;



function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('João', 'Correia');
p2.nome = 'Novo João';
console.log(p2);


// p2 = (endereco de memoria) -> 'valor' 
// o ' valor ' é possivel modificar na const..
// p2 = enderecodememoria = {nome: 'outroJoao'};
// oq nao é possivel fazer é . p2 = outraCoisa;
// o metodo Object.freezer(p2), faz com que não seja permitido a posivel alteração mostrada acima

// new vai criar um bojeto vazio "{}" <-this e no final retorna tudo 
