let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let otherNumbers = numbers.splice(5,3);
console.log(otherNumbers);
console.log(numbers);
numbers.splice(5, 0, 6, 7, 8);
console.log(numbers);

