const path = require('path');
const caminhoArquivo = path.resolve(__dirname , 'test.json');

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

/*
const pessoas = [
    {nome: 'Pedro'},
    {nome: 'Marco'},
    {nome: 'Rodrigo'},
    {nome: 'Renan'},
]

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);


*/

async function lerArquivos(caminho) {
    const dados = await ler (caminho);
    renderizaDados(dados)
    return dados;
}

const dadosArquivos = lerArquivos(caminhoArquivo)
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

function renderizaDados(dados){
    const novosDados = JSON.parse(dados);
    novosDados.forEach(val =>  console.log(val.nome))
    
}