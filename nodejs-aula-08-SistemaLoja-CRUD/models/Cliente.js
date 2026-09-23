//Model Cliente
// Um model é a representação de uma entidade do sistema (tabela)

//importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
//importando a biblioteca sequelize
import Sequelize from "sequelize";

//O método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {
    //Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type:Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

//O método .sync() sicroniza a estrutura do model com a tabela do banco de dados 
//force:false sincroniza a tabela somente se não existir
Cliente.sync({force: false});

//Exportando o módulo
export default Cliente;