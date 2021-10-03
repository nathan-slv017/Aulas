function rand(min = 1, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(frase) {
    return new Promise((resolve, reject) => {

        if (typeof frase !== 'string') reject(() => {
            throw new Error('Valor não suportado')
        })

        setTimeout(() => {
            resolve(frase)
        }, rand())
    })
}

// espera('Nathan')
//     .then(value => {
//         console.log(value)
//         return espera('Silva')
//     }).then(value => {
//         console.log(value)
//         return espera('ribeiro')
//     }).then(value => {
//         console.log(value)
//         return espera('Henrrique')
//     }).then(value => console.log(value))


async function executa() {
    try {

        const m1 = await espera('frase 1').then(v => v)
        console.log(m1)

        const m2 = await espera('frase 2').then(v => v)
        console.log(m2)

    } catch (e) {
        console.log(e)
    }
}

executa()