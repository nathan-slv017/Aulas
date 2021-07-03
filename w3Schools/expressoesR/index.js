function fala(nome){
    console.log('oi ' + nome);
}

function process(callback){
    const nome = 'nathan';
    console.log('realizanado a sua função');
    callback(nome)
}

process(fala);