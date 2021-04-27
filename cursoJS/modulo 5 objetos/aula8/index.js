// espreção regular
let cpf ='504.731.128-76';
let cpfLimpo = cpf.replace(/\D+/g, ''); // para remover os pontos
console.log(cpfLimpo);

cpfArray = Array.from(cpfLimpo);
console.log(cpfArray);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));