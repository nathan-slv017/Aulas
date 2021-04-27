/* alguns metodos para objetos
Object.values
Object.entries 
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/


const loja = {sapatos: 20, camisas: 30};
//console.log(Object.entries(loja));

const escola = {alunoA:'João', alunoB:'Paulo', alunoC:'Matheus'};
for(let [status, aluno] of Object.entries(escola)){
    console.log(status, aluno);
}