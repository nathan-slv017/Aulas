// console.log(Function.prototype.apply.call(Math.floor, undefined, [3]));

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max)