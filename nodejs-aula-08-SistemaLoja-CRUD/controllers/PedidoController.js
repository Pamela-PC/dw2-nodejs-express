import express from 'express';
import Pedido from '../models/Pedido.js';

const route = express.Router();

// ROTA PEDIDOS
route.get("/pedidos",function(req,res){
   
    Pedido.findAll().then(pedidos=>{
        res.render("pedidos", {
        pedidos: pedidos,
        })
    }).catch(error =>{
        console.log(`Ocorreu um erro ao listar os pedidos. ERRO: ${error}`);
    })  
})

route.post("/pedidos/cadastrar", function(req, res){

    const numero = req.body.numero;
    const valor = req.body.valor;

    Pedido.create({
        numero: numero,
        valor: valor,
    }).then(()=>{
        res.redirect("/pedidos")
    }).catch(error=>{
        console.log(`Ocorreu um erro ao cadastrar o pedido. ERRO: ${error}`)
    })

})

export default route;