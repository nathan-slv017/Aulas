require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log('prontinho :)')
        app.emit('pronto')
    })
    .catch( e => console.log(e));

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csurf = require('csurf');
const { middleewareGlobal, checksCsrfError, csfrMiddleware } = require('./src/middlewares/middleeware');


app.use(helmet());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf);
//Nossos próprios midllewares
app.use(middleewareGlobal);
app.use(checksCsrfError);
app.use(csfrMiddleware);
app.use(routes);


app.on('pronto' ,() =>{
    app.listen(3000, () =>{
        console.log("Acessar http://localhost:3000");
        console.log("Servidor executando na porta 3000");
    });
})


