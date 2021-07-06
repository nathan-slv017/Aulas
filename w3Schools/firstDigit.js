function firstDigit(inputString){
    const find =/[0-9]/ ;
    return inputString.match(find)[0]
}

console.log(firstDigit('antha_123'))