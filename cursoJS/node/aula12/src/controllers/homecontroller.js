exports.paginaInicial = (req, res) => {
    // res.send() <- jeito antigo
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(`Ei, sou sua nova rota de Post.`)
}