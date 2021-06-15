const fs = require('fs').promises;



module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, { flag: 'w'});
}






//fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w'})
// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a'}) append*