//index.js - Arquivo principal do back-end

//Importando o express para o projeto
const express = require("express");//Forma Classica(Commun JS Modules)

const app = express(); //Criando uma instância do express

//Configurando o ejs
app.set('view engine', 'ejs');//ejs renderiza as páginas do site

//AQUI IRÃO AS ROTAS DO SITE
//ROTA PRINCIPAL
//.get() -> Cria uma rota na aplicação
app.get("/", (req,res) => {
    res.render('index');

});

//ROTA DE PRODUTOS
app.get("/produtos", (req, res) =>{
    res.render('produtos');
});

//ROTAS SERVIÇOS
app.get("/servicos", (req, res)=>{
    res.render('servicos');
})

//ROTAS CLIENTES
app.get("/clientes", (req, res)=>{
    res.render('clientes');
})

//ROTAS PERFIL
app.get("/perfil", (req, res) =>{
    res.render('perfil');
})

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