const cadastro = {
    lista : function(cidade, pais){
    return this.nome + ' ' + this.sobrenome + ' ' + 'mora na cidade ' + cidade + ' e no país ' + pais
    }
}

const dados = {
    nome: 'Nathan',
    sobrenome: 'Silva'
}

console.log(cadastro.lista.apply(dados, ['Diadema'], ['Brasil']));