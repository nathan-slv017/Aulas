function differentSymbolsNaive(s){
    let different = 0;
    let letters = {};

    for(let i = 0; i < s.length; i++){
        if(!letters[`${s[i]}`]){
            different++;
            letters[`${s[i]}`] = s[i]
        }
    }
    console.log(different, letters);
}

differentSymbolsNaive('bcaba')