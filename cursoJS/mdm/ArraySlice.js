// O método splice() altera o conteúdo de uma lista, adicionando novos
// elementos enquanto remove elementos antigos.

// array.splice(indice[, deleteCount[, elemento1 [, ...[, elementoN]]]])

let myFish = ["angel", "clown", "mandirin", "rubia"];
let removed = myFish.splice(3, 1)
console.log(removed)

let meuHonda = {cor:'vermelho', rodas}