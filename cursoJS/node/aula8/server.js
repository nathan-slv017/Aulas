const express = require('express');
const app = express();



//          Criar   ler  atualizar apagar
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET     PUT     DELETE  :)
// hhtp://meusite.com/ <- GET -> Entrega a página /
// hhtp://meusite.com/sobre <- GET -> Entrega a página /sobre
// hhtp://meusite.com/contato <- GET -> Entrega a página /contato

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulario');
});

app.get('/contato', (req, res) =>{
    res.send('meu contato é (11)961403057!');
})

app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});