function appeBoxes(k){
    let odd = [];
    let even = [];
    if(k === 1)return -1
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    for(let i = k; i > 0; i--){
        if(i % 2 == 0)odd.push(i)
        else even.push(i);
    }
    const red = odd.map(v => v * v).reduce(reducer)
    const yellow = even.map(v => v * v).reduce(reducer)
    return red - yellow;
}

console.log(appeBoxes(1));