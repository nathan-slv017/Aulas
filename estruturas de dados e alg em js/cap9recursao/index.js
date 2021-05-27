/*function recursiveFunction1(somaParam){
    recursiveFunction2(somaParam);
}

function recursiveFunction2(somaParam){
    recursiveFunction1(somaParam);
}
*/

function understandRecursion(soIunderstandRecursion){
    const recursionAnswer = confirm('Do you understand recursion ?');
    if(recursionAnswer === true){
        return true;
    }
    understandRecursion(recursionAnswer);
}

function factorialIterative(number){
    if(number < 0) return undefined;
    let total = 1;
    for(let n = number; n > 1; n--){
        total = total * n
    }   
    return total
}

console.log(factorialIterative(5));

//outro metodo 

function factorial(n){
    if(n === 1 || n === 0){
        return 1;
    }
    return n * factorial(n -1);
    
}

console.log(factorial(5))