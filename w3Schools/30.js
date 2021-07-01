function circleOfNumbers(n, firstNumber) {
    let currentNumber = firstNumber;
    for(let i = 0; i< n/2; i++ ){
        currentNumber ++
        if(currentNumber === n)currentNumber = 0;
    }
    console.log(currentNumber);
}
circleOfNumbers(4, 1);
