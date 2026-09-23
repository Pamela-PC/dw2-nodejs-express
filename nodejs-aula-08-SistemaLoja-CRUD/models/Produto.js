//Importando arquivo de conexão
import connection from "../config/sequelize-config.js";
//Importando sequelize
import  Sequelize  from "sequelize";

//Definindo a estrutura da tabela no banco
const Produto = connection.define('produtos',{
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

Produto.sync({force:false});

export default Produto;