import express from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js";

//Importando a biblioteca bcrypt(hash de senha)
import bcrypt from "bcrypt";

//ROTA LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

//ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res)=>{
    //Coletando os dados do usuário
    const email = req.body.email
    const password = req.body.password
    //Buscando o usuário no banco
    Usuario.findOne({where: {email: email}}).then((usuario) =>{
        //SE O USUÁRIO EXISTIR
        if(usuario != undefined){
            //VALIDANDO A SENHA(HASH)
            const senhaCorreta = bcrypt.compareSync(password, usuario.password);
            //Se A SENHA FOR VÁLIDA
            if(senhaCorreta){
                res.redirect("/");
                //SE A SENHA FOR INVÁLIDA      
            }else{
                res.send(` Senha inválida!<br>
                    Verifique os dados e tente novamente!<br>
                    <a href="/login">Voltar</a>`);
            }
        //SE O USUÁRIO NÃO EXISTIR    
        }else{
            res.send(`Usuário não existe!<br>
                Verifique os dados e tente novamente!<br>
                <a href="/login">Voltar</a>`);
        }
    });
});

//ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/cadastro/novo", (req, res) => {
  //coletar os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  //Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //Usuário não encontrado
    if (usuario == undefined) {
      //Cadastra o usuário
      //GERANDO O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      //Enviando para o banco de dados
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => res.redirect("/login"))
        .catch((error) => {
          console.log(`Erro ao criar a conta. ERRO: ${error}`);
        });
        //Usuário já cadastrado
    }else{
        res.send(`Usuário já cadastrado!<br>
            Verifique os dados e tente novamente.<br>
            <a href="/login">Voltar</a>`)
    }
  });
});

export default router;
