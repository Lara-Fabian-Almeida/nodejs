// Importações
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router(); // Especificação de que se quer apenas as rotas do express.

routes.get('/users', async(req, res) => {
    const users = await connection('users').select('*');
    res.json(users)
})

routes.post('/users', async(req, res) => {
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id, 
        name, 
        email,
        idade,
        empresa
    })
    res.json({id})
})

// Exportação do módulo para ser utilizado em outros locais.
module.exports = routes;