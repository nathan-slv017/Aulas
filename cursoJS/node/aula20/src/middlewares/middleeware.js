exports.middleewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
    next();
}

exports.checksCsrfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.send('erro404');
  }
};

exports.csfrMiddleware = (req, res, next) => {
  res.locals.csrf = req.csrfToken();
  next();
}