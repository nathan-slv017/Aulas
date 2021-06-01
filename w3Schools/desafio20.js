function arrayM(inputArray){
    let maxDiff = 0;

    for(let i = 1; i < inputArray.length; i++){
        const currentDiff = Math.abs(inputArray[i -1] - inputArray[i]);
        
        if(maxDiff < currentDiff){
            maxDiff = currentDiff;
        }
    }
    return maxDiff
}