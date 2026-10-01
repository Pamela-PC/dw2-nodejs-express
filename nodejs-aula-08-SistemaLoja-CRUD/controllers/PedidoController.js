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

route.get("/pedidos/excluir/:id", (req, res) => {

    const id = req.params.id;

    Cliente.destroy({
        where:{
            id:id,
        },
    }).then(()=>{
        res.redirect("/pedidos");
    }).catch((error)=>{
        console.log(`Erro ao excluir pedido. ERRO ${error}`);
    });
});

route.get("/pedidos/editar/:id", (req,res)=>{
    const id = req.params.id;

    Pedido.findByPk(id).then(pedido=>{
        res.render("pedidoEditar", {
            pedido: pedido,
        }).catch((error)=>{
            console.log(`Error ao editar o pedido. ERRO: ${error}`);
        })
    });
});

route.post("/pedido/alterar", (req, res) =>{
    const id = req.body.id;
    const numero = req.body.numero;
    const valor = req.body.valor;

    Pedido.update(
        {
            numero: numero,
            valor: valor
        },
        {
            where:{
                id:id
            }
        }).then(()=>{
            res.redirect("/pedidos");
        }).catch((error)=>{
            console.log(`Erro ao alterar o pedido. ERRO: ${error}`);
        });
});

export default route;