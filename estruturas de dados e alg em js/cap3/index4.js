let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*for(const n of numbers){
    if(n % 2 === 0 ){
        console.log(n + " é par");
    }
}*/

for(const n of numbers) {
    console.log(n % 2 === 0 ? 'even': 'odd');
}

let aEntries = numbers.entries();

console.log(aEntries.next())
console.log(aEntries.next().value)

let newNumbers = Array.from(numbers);

let even = Array.from(numbers, x => (x % 2 === 0));
let numbers3 = Array.of(1, 3 , 4 ,5 )

let fill = [1, 2, 3, 5, 6]
fill.fill(2, 3, 5);

let ones = Array(6).fill(1)

let copyWithin = [1, 2, 3, 4, 5, 6];
copyWithin.copyWithin(0, 4);
console.log(copyWithin);


let arrayCopy = [1, 2, 3, 4, 5];
arrayCopy.copyWithin(1, 3, 4)
console.log(arrayCopy)