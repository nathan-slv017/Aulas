// async Await
// para resolver os problemas do callBack (callBack Hell);

function rand(min = 1, max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string'){
                reject('Errado');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei a promise');
            return
        }, tempo)
    });
}
/*
esperaAi('Fase 1', rand(1, 3))
    .then(valor => {
        console.log(valor)
        return esperaAi('Frase 2 ', rand())
    })
    .then(valor =>{
        console.log(valor)
        return esperaAi('Frase 3', rand())
    })
    .then(valor =>{
        console.log(valor)
    })
    .catch( e => console.log(e));
*/ 
// o modelo acima e sem async e await,  se a função tem async, obrigatoriamente dele ter o await

async function executa(){
    try{
        const fase1 = await esperaAi('Frase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('Frase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi(1, rand());
    console.log(fase3);
    console.log('terminamos a faze 3');
    } catch(e) {
        console.log(e)
    }
    

}
executa();

/* Os tres estados da promise
pendente / pending: quando a promise é chamada antes de ser finalizada (sem o aweit ou then)
fullfillerd : promise resolvida
rejected : rejeitada

*/

