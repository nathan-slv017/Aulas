function rand(min = 1, max = 3) {
    min*= 1000;
    max*= 1000;
    return  Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Bad value');

        setTimeout(() =>{
            resolve(msg);
        }, tempo)
    })
};

async function executa(){
    try{
        const fase1 = await espera('Frase 1', rand());
        console.log(fase1)

        const fase2 = await espera('Frase 2', rand());
        console.log(fase2)
    }catch(e) {
        console.log(e)
    }
}
executa();