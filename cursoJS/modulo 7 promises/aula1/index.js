function rand(min = 1, max = 3){
    min*= 1000;
    max*= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg != 'string') reject('Bad value'); // o reject é como se foce um returne

        setTimeout(() =>{
            resolve(msg);
        }, tempo);
    });
}

espera('Frase 1 ', rand(1, 3)).then(resposta =>{
    console.log(resposta);
    return espera('Frase 2', rand(1, 3));
}).then(resposta =>{
    console.log(resposta);
    return espera('Frase 3', rand(1, 3));
}).then(resposta =>{
    console.log(resposta);
}).catch(e =>{
    console.log('Erro', e);
})