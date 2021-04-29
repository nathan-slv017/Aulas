// arrays bidimensionais e multidimensionais

let avaregeTempDay = [];
avaregeTempDay[0] = [30, 20, 25, 29, 28, 17];
avaregeTempDay[1] = [31, 32, 40, 20, 30, 10];

console.log(avaregeTempDay[0]);
console.log(avaregeTempDay[1], avaregeTempDay[0].length);



function matrix(myMitrix){
    for(let i = 0; i <myMitrix.length; i++){
        for(let j = 0; j <myMitrix[i].length; j++){
            console.log(myMitrix[i][j]);
        }
    }
}
matrix(avaregeTempDay);

const matrix3x3x3= [];

for(let i = 0; i < 3; i++){
    matrix3x3x3[i] = [];
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for(let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i+j+z
        }
    }
}

console.log(matrix3x3x3);

const zero = 0
const posi = [10, 20, 21, 32, 45]
const negt = [-120, -20]

const numbers = posi.concat(zero, negt);
console.log(numbers)