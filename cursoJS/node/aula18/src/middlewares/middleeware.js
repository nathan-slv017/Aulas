module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
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