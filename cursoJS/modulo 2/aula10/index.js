// ? :
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso1;
const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);