//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;

//const data = new Date(0 + tresHoras + umDia);
const data = new Date(2021, 00, 20, 15,14,26); // a, m, d, h, M, s, ms
const dataString = new Date('2021-04-20 20:59');
console.log(data.toString());
console.log(dataString.toString());


console.log('Dia', data.getDate());
console.log('mês', data.getMonth()); // mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('Dia da semana', data.getDay()); // 0 é domingo, 6 - sábado.
console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getseconds());

    return `${dia}/${mes}/${ano}   ${hora}:${min}:${seg}`;

}
const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);

 