import express from 'express' // Importando o framwork express

// Router(): método do express para criar rotas
const rota = express.Router();


//ROTAS SERVIÇOS
rota.get("/servicos", (req, res)=>{
    res.render('servicos');
})

export default rota;