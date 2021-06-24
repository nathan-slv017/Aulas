function additionWithoutCarrying(a, b) {
    r=0;
    p=1
    while(a>0 ||b>0){
        
        r+=((a%10 +b%10)%10)*p
        a= parseInt(a/10)
        b= parseInt(b/10)
        p*=10
    }
    return r
}
