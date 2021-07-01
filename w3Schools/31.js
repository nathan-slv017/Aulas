function depositProfit(deposit, rate, threshold) {
    let vezes = 0;
    let dep = deposit;
    while(threshold > dep){
        dep = dep + (dep/100 * rate);
        vezes ++;
    }
    console.log(vezes);
    console.log(dep);
}
depositProfit(100, 20, 170);