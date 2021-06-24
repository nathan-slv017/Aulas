// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [12, 32, 10, 3, 4, 6, 9, 80];
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map((valor) =>{
    return valor * 2;
}).reduce((acumulador, valor) =>{
    return acumulador + valor
});
// [ 12, 32, 10, 4, 6 ,  80 ] pares
// [ 24, 64, 20, 8, 12, 160 ] o dobro dos pares
// 288 a soma dos valores
console.log(numerosPares);


const numeros1 = [3, 4, 5, 6, 7, 8, 10];
const numerosimpares = numeros1.filter(value => value % 2 > 0).map(value => value *2).reduce((ac, value) => ac + value);
console.log(numerosimpares)