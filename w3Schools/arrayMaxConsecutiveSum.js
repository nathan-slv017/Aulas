function arrayMaxConsecutiveSum(inputArray, k){
    let maior = 0;
    
    for(let i = 0; i < inputArray.length; i++){
        let rodadas = 0;
        const number = reclusiva(i, rodadas)
        if(number > maior)maior = number;
    }
    
    function reclusiva(index, rodada ){
        let rod = k
        if(rod ===){ 
            return;
        }
        let vez = inputArray[index] + inputArray[index + 1];
        return vez + reclusiva(index + 1, rod + 1)
    }
    console.log(maior)
}
const meuArray = [2, 3, 5, 1, 6];
arrayMaxConsecutiveSum(meuArray, 2)