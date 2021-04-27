function funcao(){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(total)
} 
// 'arguments' sustenta todos os argumentos enviados

function funcao1(a, b = 2, c = 3) {
    b = b || 0;
    console.log( a + b + c);
}

function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Luiz', sobrenome:'Otávio', idade: 10}
//funcao2(obj);

function conta(operador, acumualdor, ...numeros) {
    for(let numero of numeros){
        
        if(operador === '+') acumualdor += numero
        if(operador === '-') acumualdor -= numero
        if(operador === '*') acumualdor *= numero
        if(operador === '/') acumualdor /= numero
    }
    console.log(acumualdor);
}
conta('+', 0, 20, 30 ,40);