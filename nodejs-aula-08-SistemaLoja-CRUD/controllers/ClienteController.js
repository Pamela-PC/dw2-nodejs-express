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

//Rota de cadastro de clientes
route.post("/clientes/cadastrar", function(req,res){
    //Capturando os dados vindo do formulário e gravando as variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco =  req.body.endereco;
    //chamando o model para gravar os dados no meu banco
    //Equivalente ao insert into....
    Cliente.create({
        //nome da coluna: variável
        nome: nome,
        cpf: cpf,
        endereco: endereco,
    }).then(()=>{
        res.redirect("/clientes")
    }).catch(error =>{
        console.log(`Ocorreu um erro ao cadastrar o cliente. ERRO: ${error}`)
    });
})



export default route;