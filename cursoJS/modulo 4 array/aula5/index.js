//map, dferente do filter, vai modificar o valor (sem mecher no original) e colocar em uma nova varialvel
const numeros = [2, 5, 6, 20, 10, 13, 40, 6, 70];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro)


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoa = [
    {nome:'Jorge', idade:'13'},
    {nome:'Willian', idade:'24'},
    {nome:'Nathan', idade:'19'},
    {nome:'Luffy', idade:'19'},
    {nome:'Vinicios', idade:'20'},
    {nome:'henrri', idade:'20'}
]
const apenasNome = pessoa.map((obj) => obj.nome);
const semNome = pessoa.map((obj) => ({idade: obj.idade})  )


const addID = pessoa.map((obj) =>{
    const newObj = {...obj}
    const rand = Math.floor(Math.random() *(100 + 1000) - 100)
    newObj.id = rand
    return newObj
});

console.log(apenasNome, semNome, addID);