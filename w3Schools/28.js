// function arrayReplace(iA, eR, sE){
//    let array = iA;
//    for(let i = 0; i< iA.length; i++){
//        if(array[i] == eR) array[i] = sE;
//    }
//    return array
// }
// let array = [1, 2, 3, 2, 2, 2, 8, 9];
// console.log(arrayReplace(array, 2, 3));

// function evenDigitsOnly(n){
//     return (n+"").split("").every(x=>x%2===0);
// }

// const n = 123456
// console.log(evenDigitsOnly(n))

const re = /ab+c/;
let re = new RegExp("ab+c");