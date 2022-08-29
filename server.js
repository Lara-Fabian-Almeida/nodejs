const express = require('express');

const app = express();
app.use(express.json());

// Rota: caminho para acessar url de um site.

// '/': é a raiz.

/**
 * Métodos HTTP:
 * GET - busca informação;
 * POST - cria informação;
 * PUT - atualiza/altera informação;
 * DELETE - exclui informação.
 */

/**
 * '/users': recurso usado na rota para acessar os usuários.
 * 
 * JSON (JavaScript Object Notation): formato que permite armazenar e comunicar informações 
 * de forma organizada, além de tornar seu acesso mais fácil. *  
*/ 

/*
app.get('/users', (req, res) => {
    res.json({
        nome: 'Lara',
        empresa: 'UESB'
    })
})

app.post('/users', (req, res) => {
    res.json({
        nome: 'Lara',
        empresa: 'UESB'
    })
})
*/

app.put('/users', (req, res) => {
    res.json({
        nome: 'Maria',
        empresa: 'UESB'
    })
})

/*---------------------------------------------------------------------------------------------*/

/**
 * Parâmetros:
 * QUERY - parâmetros nomeados enviados na rota (usam & para concatenar informações na URL
 * e vêm após a interrogação (?));
 * ROUTE PARAMETERS - parâmetros utilizados para identificar um recurso;
 * REQUEST BODY - corpo da requisição.
 */

 app.get('/users', (req, res) => {
    const params = req.query;
    console.log(params)
    res.json(params)
})

app.post('/users/:id', (req, res) => {
    const params = req.params;
    console.log(params)
    res.json(params)
})

app.post('/users', (req, res) => {
    const params = req.body;
    console.log(params)
    res.json(params)
})

app.listen(3001);