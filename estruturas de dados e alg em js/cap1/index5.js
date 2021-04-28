let month = 3

switch(month){
    case 1:
        console.log('Janeiro');
        break
    case 2:
        console.log('Fevereiro');
        break
    default:
        console.log('Month is not January, February');
}

function soma(n, n2){
    return n + function(){
        return n2
    }
}
let resultado = soma(10, 20);
console.log(resultado)