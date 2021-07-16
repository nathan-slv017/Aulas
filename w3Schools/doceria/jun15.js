function deleteDigit(n){
    let casas = n.toString();
    let maior = 0;
    for(let i = 0; i < casas.length; i++){
        const vez = casas.replace(casas.charAt(i), '');
        vez > maior ? maior = vez: maior
    }
    console.log(maior)
}
const number = 218616;


deleteDigit(number);