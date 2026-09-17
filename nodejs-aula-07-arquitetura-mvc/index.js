//index.js - Arquivo principal do back-end

//Importando o express para o projeto
//const express = require("express"); //Forma Classica(Commun JS Modules)

import express from 'express'; // Forma de importação do ES6

const app = express(); //Criando uma instância do express

// Importando o controller de Produto

import ProdutoController from "./controllers/ProdutoController.js";
import ServicoController from "./controllers/ServicoController.js";
import UsuarioController from "./controllers/UsuarioController.js";
import ClienteController from "./controllers/ClienteController.js";

//Configurando o ejs
app.set('view engine', 'ejs'); //ejs renderiza as páginas do site

// Configurando a pasta public para arquivos estáticos
app.use(express.static('public'));

app.use(ProdutoController);
app.use(ServicoController);
app.use(UsuarioController);
app.use(ClienteController);

//AQUI IRÃO AS ROTAS DO SITE
//ROTA PRINCIPAL
//.get() -> Cria uma rota na aplicação
app.get("/", (req,res) => {
    res.render('index');

});

//Metodo do express para iniciar o servidor
//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
    //Tratando erros de inicialização

    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro ${error}`);
    }
    //Em caso de sucesso
    else{

        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});