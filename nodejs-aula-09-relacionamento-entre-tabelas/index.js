// Importando o Express
//const express = require("express")
import express from 'express';
// Importando o arquivo de conexão do Sequelize
import connection from './config/sequelize-config.js';
// Iniciando o Express 
const app = express();

// configuração do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))



// Realizando a conexão com banco de dados
connection.authenticate().then(() => {
    // Sucesso na promessa
    console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa
}).catch(error => {
    console.log(`Ocorreu um erro ao conectar no Banco de Dados: Erro ${error}`)
});

//Aplicando Associações
defineAssociations();

//Sincronizando os Models

Promise.all([
    Cliente.sync({force: false}),
    Pedido.sync({force: false})
]).then(()=>{
    console.log("Tabelas de relacionamentos sincronizadas com sucesso!");
}).catch((error)=>{
    console.log(`Erro ao sincronizar as tabelas. ERRO: ${error}`);
})

// CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = 'loja_relacional';
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
    console.log(`O banco de dados ${DB_NAME}, está criado!`);
}).catch((error) => {
    console.log(`Falha ao criar o banco de dados ${DB_NAME}, Erro: ${error}`);
});


import ClienteController from "./controllers/ClienteController.js"
import PedidoController from "./controllers/PedidoController.js"
import ProdutoController from "./controllers/ProdutoController.js"

import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
import Produto from "./models/Produto.js";

//Importando as associações
import defineAssociations from "./config/associations.js"

app.use('/', ClienteController);
app.use('/', PedidoController);
app.use('/', ProdutoController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})