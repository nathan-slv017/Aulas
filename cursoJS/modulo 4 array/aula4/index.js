//Filter vai sempre retornar um Array com os mesmo numero de elemento ou menos..


// Retorne os números maiores que 10
const numero = [5, 11, 20, 13, 40, 90, 1, 3, 4, 25];

const maiorQueDez = numero.filter((valor, indice, array) =>{
    console.log(valor, indice, array)
    return valor >10;
})
console.log(maiorQueDez);
const maiorQueVinte = numero.filter(valor => valor >25);
console.log(maiorQueVinte)