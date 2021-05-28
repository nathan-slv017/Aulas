function entendeuAReclusao(){
    const pergunta = confirm('Você entendeu a reclusão');
    if(pergunta == true){
        return true;
    }
    entendeuAReclusao()
}

function factorial(n){
    if(n === 1 || n === 0){
        return 1;
    }
    return n = factorial(n - 1);
}

function fibonacci(n){
    if(n < 1) return 0;
    if(n <= 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}