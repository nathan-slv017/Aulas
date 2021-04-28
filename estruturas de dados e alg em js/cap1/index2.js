var myVarible = 'global';
var myOtherVarible = 'global'

function myFunction(){
    myVarible = 'local'
    return myVarible;
}

function myOtherFunction(){
    myOtherVarible = 'local';
    return myOtherVarible;
}

console.log(myVarible);
console.log(myFunction());
console.log(myOtherVarible);
console.log(myOtherFunction());
console.log(myOtherVarible);

let numero = 147
numero %= 3;
console.log(numero)