function retornaFuncao(){
    const nome = 'Nathan';
    return function () {
        return nome;
    }
}
const funcao = retornaFuncao();
console.dir(funcao)