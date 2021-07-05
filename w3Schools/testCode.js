const texto = 'nathan nathan naaaaathaaaannnnnnn apappapapa'
// * 0 ou n 
// + 1 ou n
// ? 0 ou 1
// \ caractere de escape
// {n, m} {10,} {0, 10} {5, 10}

const regExp1 = /na+tha+n+/gi
const regExp2 = /\.(jpg|jpeg)/g //ou outros arquivos
console.log(texto.match());