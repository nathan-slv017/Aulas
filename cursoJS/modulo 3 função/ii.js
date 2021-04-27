function rand(min = 100, max = 500){
    const r = Math.floor(Math.random() *(max - min) + min);
    return Math.floor(r);
}

while(rand < 290){
    console.log('tentar de novo')
    rand()
}

do{
    console.log('tenta tbm de novo');
    rand()
} while(rand < 290);