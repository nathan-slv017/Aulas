// function fisr(arr){
//     const array = []
//     if(arr.length === 0) return array;
//     const priNum = arr[0];
//     const ultNum = arr[arr.length -1];
//     arr.splice(0, 1, ultNum)
//     arr.splice(arr.length -1, arr.length -2, priNum);

// }
// const array = []
// console.log(fisr(array))

function concatenateArrays(a, b) {
    return a.concat(b)
}
const arrayA = [1, 2, 20, 3, 4, 5];
const arrayB = [7, 8, 9, 100];
console.log(concatenateArrays(arrayA, arrayB))
