// return
// Retorna um valor
// Termina a função
//function soma(a, b) {
//    return a + b;
//}

//document.addEventListener('click', function () {
//    document.body.style.backgroundColor = 'red';
//});

function criaPessoa (nome, sobrenome){
    return {nome, sobrenome};
}
const p1 = criaPessoa('Nathan', 'Silva')
console.log(typeof p1);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);

function criaMultiplicador(mult) {
    return function (n) {
        return n * mult;
    };
}
const duplika = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplika(10));
console.log(triplica(10));
console.log(quadriplica(10));