function criarPessoa(nome, sobreNome, idade) {
    return {
        nome: nome,
        sobreNome: sobreNome,
        idade: idade
    };
}
const pessoa1 = criarPessoa('Nathan', 'Silva', '19');
console.log(pessoa1.idade);