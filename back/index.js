const express = require('express');

const server = express();

server.listen(3003);

server.use(express.json());

const veiculos = ['Gol', 'onix', 'HB20'];

// Retorna um veiculo
server.get('/veiculo/:index', (req, res) => {
    const {index} = req.params;

    return res.json(veiculos[index]);
})

// Retornar todos os veiculos
server.get('/veiculos', (req, res) => {
    return res.json(veiculos)
})

// Criar um novo veiculo 
server.post('/veiculo', (req, res) => {
    const { nome } = req.body;
    veiculos.push(nome);

    return res.json(veiculos);
});

// Atualiza um veiculo 
server.put('/veiculo/:index', (req, res) => {
    const { index } = req.params;
    const { nome } = req.body;

    veiculos[index] = nome;

    return res.json(veiculos[index]);
})

// Deletar um veiculo 
server.delete('/veiculo/:index', (req, res) => {
    const { index } = req.params;

    veiculos.splice(index, 1);
    return res.json({message : 'Veiculo deletado com sucesso!!'})
});