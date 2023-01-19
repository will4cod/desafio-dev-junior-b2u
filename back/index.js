const express = require('express');

const server = express();

server.listen(3003);

server.use(express.json());

const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({extended: true}))

const veiculos = [{
    "id":1,
    "Nome":"Gol",
    "Marca":"Volkswagen",
    "Ano de fabricação":"2015",
    "Descrição":"detalhes na funilaria",
    "Dono":{
       "Nome":"Lucas Santos",
       "Email":"lucas.santos@teste.com",
       "Telefon":"933335678"
    }
 },
 {
    "id":2,
    "Nome":"Onix",
    "Marca":"Chevrolet",
    "Ano de fabricação":"2023",
    "Descrição":"0km",
    "Dono":{
       "Nome":"Jair Antonio",
       "Email":"jair.antonio@teste.com",
       "Telefon":"982379909"
    }
 },
 {
    "id":3,
    "Nome":"HB20",
    "Marca":"Hyundai",
    "Ano de fabricação":"2017",
    "Descrição":"Necessario trocar os pneus",
    "Dono":{
       "Nome":"Ana Silva",
       "Email":"ana.silva@teste.com",
       "Telefon":"993480324"
    }
 },
 {
    "id":3,
    "Nome":"Polo",
    "Marca":"Volkswagen",
    "Ano de fabricação":"2022",
    "Descrição":"seminovo",
    "Dono":{
       "Nome":"Felipe Santos",
       "Email":"felipe.santos@teste.com",
       "Telefon":"987652395"
    }
 },
 {
    "id":4,
    "Nome":"Uno",
    "Marca":"Fiat",
    "Ano de fabricação":"2010",
    "Descrição":"carro de trabalho",
    "Dono":{
       "Nome":"Vitor Ferreto",
       "Email":"vitor.ferreto@teste.com",
       "Telefon":"963981245"
    }
 }

]

// const veiculos = ['Gol', 'onix', 'HB20'];

// Retorna um veiculo
server.get('/veiculo/:index', (req, res) => {
    const {index} = req.params;

    return res.json(veiculos.find(veiculo => veiculo.id == index));
})

// Retornar todos os veiculos
server.get('/veiculos', (req, res) => {
    return res.json(veiculos)
})

// Criar um novo veiculo 
server.post('/veiculo', (req, res) => {
    const veiculo = req.body;
    veiculos.push(veiculo);

    return res.json(veiculos);
});

// Atualiza um veiculo 
server.put('/veiculo/:index', (req, res) => {
    const { index } = req.params;
    const veiculoAtualizado = req.body;

    const veiculo = veiculos.find(veiculo => veiculo.id == index)

    const idArray = veiculos.indexOf(veiculo)

    if(idArray < 0){
        res.json({Message: "Veiculo não encontrado"})
    }

    veiculos[idArray] = veiculoAtualizado;

    return res.json(veiculos[idArray]);
})

// Deletar um veiculo 
server.delete('/veiculo/:index', (req, res) => {
    const { index } = req.params;

    const veiculo = veiculos.find(veiculo => veiculo.id == index)

    const idArray = veiculos.indexOf(veiculo)

    if(idArray < 0){
        return res.json({Message: "Veiculo não encontrado"})
    }

    veiculos.splice(idArray, 1);
    return res.json({message : 'Veiculo deletado com sucesso!!'})
});