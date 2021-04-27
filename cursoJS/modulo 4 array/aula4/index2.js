const pessoas = [
    {nome:'Nathan', idade:60},
    {nome:'Maria', idade:17},
    {nome:'Luiz', idade:19},
    {nome:'Sabrina', idade:25},
    {nome:'Jose', idade:51}
]
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 
const nome5Letras = pessoas.filter(valor => valor.nome.length >= 5 ? valor.nome :'')
console.log(nome5Letras);
const pessoasCom50Mais = pessoas.filter(valor => valor.idade >50 ? valor.idade : '')
console.log(pessoasCom50Mais)
const pessoasComA = pessoas.filter(valor => valor.nome.slice(-1) == 'z'? valor.nome: '')
console.log(pessoasComA)