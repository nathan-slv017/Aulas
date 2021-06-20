exports.paginaInicial = (req, res, next) => {
    // res.send() <- jeito antigo
    
    res.render('index', {
        titulo: 'Este será o <span style="color:red">titulo</span> da página',
        numeros: [0,1, 2, 3,4, 5, 6, 7, 8, 9, 10]
    });
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body); 
    return;
}