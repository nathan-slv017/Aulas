function growingPlant(upSpeed, downSpeed, desiredHeight){
    
    let height = 0
    let countDays = 0;
    while(height < desiredHeight){
        height += upSpeed
        countDays++
        if(height >= desiredHeight) return countDays;
        height -= downSpeed
    } 
    return countDays
}

console.log(growingPlant(6, 5 ,10))