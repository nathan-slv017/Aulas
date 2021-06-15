const nome = 'Nathan';
const sobrenome = 'Silva';

const nomeCompleto = () => nome + " " + sobrenome
// module.exports.nome = nome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = nomeCompleto;
this.qualquerCoisa = "Qualquer coisa que eu queira exportar"


console.log();

const idade = 19;
const profissao = "Programador";

console.log(idade)
console.log(profissao)