let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = numbers.forEach(value => console.log(value % 2 ===0));

let parMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let ii = parMap.reduce((total, cada) => total += cada);
console.log(ii)