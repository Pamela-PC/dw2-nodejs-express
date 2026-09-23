import express from 'express';
//Importando o model
import Cliente from "../models/Cliente.js"
const route = express.Router();


// ROTA CLIENTES
route.get("/clientes",function(req,res){
   
    //Selecionando todos os clientes do banco de dados
    Cliente.findAll().then(clientes=>{
        res.render("clientes", {
        //Enviando a lista de clientes para a página HTML
        clientes : clientes,
        });
    }).catch(error=>{
        console.log(`Ocorreu um erro a listar os clientes. ERRO: ${error}`);
    });
})

export default route;