//metodos de promise (Promise.all, Promise.race, Promise.resolve, Promise.reject)

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) * min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return // para acabar a execução
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' passei na promise');
        }, tempo)
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
]; // se uma delas estiver errada, a promise ira rejeitar todas

Promise.all(promises)
    .then(function (valor) { // o valor de then e o resolve 
        console.log(valor);
    })
    .catch(function (error) {
        console.log(error);
    });
//


function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cach');  // Promise.reject
    }else {
        return esperaAi('Baixa a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e))