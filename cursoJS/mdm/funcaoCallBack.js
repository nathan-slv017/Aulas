function nome(nome){
    alert('helo ' + nome );
}
function pergunta(callBack){
    let nome = prompt('Please enter your nome');
    callBack(nome);
}
pergunta(nome);