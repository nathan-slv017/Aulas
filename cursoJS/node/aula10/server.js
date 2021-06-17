const express = require('express');
const app = express();

//      /profiles/12345?campanha=googleads&nome_campanha=seila


app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Confirmar</button>
    </form>
    `);
});

app.use(express.urlencoded({ extended : true}));
 
app.get('/testes/:idUsuario?/:parametro?', (req, res) =>{
    // paramans = /tetes/1/2
    // query = /testes/?anything="otherthing&blabla"
    //
    console.log(req.params);
    res.send(req.params);
    console.log(req.query);
})


app.post('/', (req, res) =>{
    res.send(`O que você me envio foi ${req.body.nome}`);
});

app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});