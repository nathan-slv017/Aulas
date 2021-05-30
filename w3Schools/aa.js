function knapsackLight(value1, weight1, value2, weight2, maxW){
    return Math.max(maxW >= weight1 && value1, maxW >= weight2 && value2, maxW >= weight1 + weight2 && value2 + value1);
}

function aa(a, b, c){
    if(a === b){
        return c;
    }
    if(a === c){
        return b;
    }
    if( b === c){
        return a;
    }
}

function isInfiniteProcess(a, b) {
    return (a <= b && (b - a)%2 ===0)
}