//metodos de promise (Promise.all, Promise.race, Promise.resolve, Promise.reject)

function rand(min, max){
    min *= 1000;
    max*= 1000;
    return Math.floor(Math.random() * (max - min) * min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(false);

        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' passei na promise');
        }, tempo)
    });
}

const promises = [
    
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5))
    
];

Promise.race(promises).then(function(valor){ // buca o valor que foi executado 100% primeiro
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
});