import express from 'express' // Importando o framwork express

// Router(): método do express para criar rotas
const rota = express.Router();

//ROTAS PERFIL
rota.get("/perfil", (req, res) =>{
    res.render('perfil');
})

export default rota;