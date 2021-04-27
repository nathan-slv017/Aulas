const nathan = function () {
    console.log('meu nome é Nathan');
}
function executaFuncao(funcao) {
    funcao()
}
executaFuncao(nathan);

// Arrow function
const funcaoArrow = () =>{
    console.log("Sou uma função");
}
// dentro de um objeto

const obj = {
    nome:'Nathan',
    falar() {
        console.log('Estou falando')
    }
}
obj.falar();