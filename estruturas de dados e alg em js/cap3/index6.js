// find e findIndex

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
function multiploOf13(element, index, arrayCopy){
    return (element % 13 == 0 );
}

console.log(numbers.find(multiploOf13));
console.log(numbers.findIndex(multiploOf13));

// includes

console.log(numbers.includes(9, 10));
console.log(numbers.includes(20));
console.log(numbers.includes(10));

// toString join

console.log(numbers.toString());
console.log(numbers.join('-'));