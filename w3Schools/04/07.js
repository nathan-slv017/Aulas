function extractEachKth(inputArray, k){
    let arrayFinal = [];
    for(let i = 0; i < inputArray.length; i++){
        if((i+1) % k !== 0)arrayFinal.push(inputArray[i]);
    }
    console.log(arrayFinal);

}
const meuArray = [2, 4, 6, 8, 10];
extractEachKth(meuArray, 2);