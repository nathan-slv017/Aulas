function logestDigitsPrefix(inputString){
    return new RegExp('^[0-9]*').exec(inputString)[0]
}

function p2(inputString){
    let regex = /^\d*/;
    return inputString.match(regex);
}

const longestDigitsPrefix = inputString => inputString.split(/\D/)[0];

const string = '123456acb'
console.log(p2(string));