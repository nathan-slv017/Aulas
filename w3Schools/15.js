avoidObstacles = a =>{
    let j = 2;
    while (a.some(e => e % j == 0 )) j++;
    return j;
}

console.log(parseInt("123", 10));