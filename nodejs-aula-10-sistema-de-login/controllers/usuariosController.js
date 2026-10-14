import express from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js"

//ROTA LOGIN
router.get("/login", (req, res)=>{
    res.render("login");
});
//ROTA DE CADASTRO
router.get("/cadastro", (req, res)=>{
    res.render("cadastro");
});

router.post("/cadastro/novo", (req, res)=>{
    //coletar os dados do formulário
    const email = req.body.email;
    const password = req.body.password;

    //Enviando para o banco de dados
    Usuario.create({
        email: email,
        password: password,
    }).then(()=>
    res.redirect("/login")).catch(error=>{
        console.log(`Erro ao criar a conta. ERRO: ${error}`);
    });
});

export default router;