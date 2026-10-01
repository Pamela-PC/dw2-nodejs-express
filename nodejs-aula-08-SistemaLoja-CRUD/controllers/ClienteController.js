import express from 'express';
//Importando o model
import Cliente from "../models/Cliente.js"
import { where } from 'sequelize';
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

//ROTA EXCLUIR CLIENTE
//:id -> Cria um parâmetro na rota
route.get("/clientes/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir o cliente
    Cliente.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/clientes");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir clientes. ERRO: ${error}`);
    });
});

//ROTA DE EDIÇÃO DE CLIENTE
route.get("/clientes/editar/:id", (req, res)=>{
    //Coletando o parâmetro do URL
    const id = req.params.id;
    //Buscando o cliente no banco pelo ID
    Cliente.findByPk(id).then(cliente=>{
        res.render("clienteEditar",{
            //enviando um objeto com os dados do cliente para a página
            cliente: cliente,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar o cliente. ERRO${error}`))
})

//ROTA QUE ALTERA O CLIENTE NO BANCO DE DADOS
route.post("/clientes/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    //Chamando o model e pedindo para alterar no banco de dados
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o cliente. ERRO: ${error}`);
    });    
});


export default route;