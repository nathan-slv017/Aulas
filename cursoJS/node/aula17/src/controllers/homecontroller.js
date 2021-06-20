const HomeModel = require('../models/HomeModel'); 

HomeModel.create({
    titulo: 'Mais um outro titulo de test',
    descricao: 'que que a velinho :( '
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e))


exports.paginaInicial = (req, res, next) => {
    // res.send() <- jeito antigo
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body); 
    return;
}