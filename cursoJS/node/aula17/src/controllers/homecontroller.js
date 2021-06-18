exports.paginaInicial = (req, res, next) => {
    // res.send() <- jeito antigo
    res.render('index');
    return
};


exports.trataPost = (req, res) => {
    res.send(req.body); 
    return
}