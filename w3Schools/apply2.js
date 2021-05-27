function alternatingSums(a) {
    let p = [0, 0]
    for(let i = 0; i < a.length -1; i++){
        if(i % 2 == 0){
            p[0] += a[i]
        }
        if(i % 2 == 1){
            p[1] += a[i]
        }
    }
    
    return p;
}
console.log(alternatingSums([10, 20, 30, 40]))