module.exports = (req, res, next) => {
    if(req.body.client) {
        req.body.client = req.body.client.replace('nathan', 'nome já cadastrado');
        console.log();
        console.log(`Vi que você postou ${req.body.client} `)
    }
    next();
}

/* exports.middlewareGlobal = (req, res, next) =>{
  next();
}
exports.souSeuOutroMiddleware = (req, res, next) =>{
    next();
}

const {middlewares.., , , } = require('./....')
*/