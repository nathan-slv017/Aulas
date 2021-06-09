class Testando{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return console.log(this.nome + " " + this.sobrenome);
    }
    falaNomeCompleto(){
        this.nomeCompleto()
    }
}
let tete = new Testando('nathan', 'silva');

let promise = new Promise((resolve, reject) =>{
    if(p == e){
        resolve()
    } else{
        reject
    }
})

function pp(){
    console.log(2);
    await console.log(promise);
    console.log(3)
}

function anonima() {
    let confirmar = confirm("voçê deseja receber notificação ?");
    if(confirmar){
        alert("Okay, sera notificado");
    } else{
        alert("Tá bom :(");
    }
}
//setTimeout(function, miliseconds) executes a function, after waiting a specifef number of miliseconds
//setInterval(function, miliseconds) same as setTimeout(), but repeats the execution of the function constinuously

myVar = setTimeout(myfunction, 3000);
clearTimeout(myVar)