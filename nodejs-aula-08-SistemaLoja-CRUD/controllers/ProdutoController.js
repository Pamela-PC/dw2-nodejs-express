
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

route.post("/produtos/cadastrar", function(req, res){
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    Produto.create({
        nome: nome,
        preco: preco,
        categoria: categoria,
    }).then(()=>{
        res.redirect("/produtos")
    }).catch(error=>{
        console.log(`Ocorreu um erro ao cadastrar o produto. ERRO: ${error}`);
    });
});

export default route;