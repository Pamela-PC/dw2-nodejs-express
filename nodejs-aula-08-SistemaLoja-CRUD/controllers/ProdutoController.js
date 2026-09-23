
import express from 'express';
import Produto from "../models/Produto.js";


const route = express.Router();

// ROTA PRODUTOS
route.get("/produtos",function(req,res){

    Produto.findAll().then(produtos=>{
        res.render("produtos", {
        produtos: produtos
        })
    }).catch(error=>{
        console.log(`Erro ao listar os produtos. ERRO: ${error}`);
    })
})

export default route;