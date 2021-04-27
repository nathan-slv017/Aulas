//reduce 
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [3, 5, 6, 3, 6, 90, 10, 20, 30, 40];
const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador.push(valor * 2)
    return acumulador;
}, [])
//console.log(total); 

//retorne a pessoa mais velha

const pessoas = [
    {nome:'Jorge', idade: 13 },
    {nome:'Willian', idade: 24 },
    {nome:'Nathan', idade: 19 },
    {nome:'Luffy', idade: 19 },
    {nome:'Vinicios', idade: 20 },
    {nome:'henrri', idade: 33 }
]
const maisVelho = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; 
}, 0);
console.log(maisVelho);



// quando não mandamos um valor inicial, ele vai começar com o primeiro valor do array
