function dados(p, a){
  let imc =  {
        peso: p,
        altura: a,
        // Getter
        get imc(){
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2)
        }
    }
    return imc
}
const p1 = dados(70, 1.70);
console.log(p1.imc)


function nomeCompleto (nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome,
        // Getter
        

        get Nome(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set Nome(valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        }
    }
}
const n1 = nomeCompleto('Nathan', 'Silva'); 
n1.nome = 'Maria Oliveira Silva' 
console.log(n1.Nome);
console.log(n1.nome);
console.log(n1.sobrenome);

