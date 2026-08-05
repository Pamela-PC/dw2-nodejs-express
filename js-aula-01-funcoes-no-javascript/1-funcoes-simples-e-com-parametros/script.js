//Função Simples

function showMessage() {
  const message = "<h2>Olá Bem-vindo</h2>";
  document.write(message);
}

//Invocando a Função
showMessage();

//Função com Parâmetros/Argumento
const user = "Pamela";

//Essa função recebe um parâmetro
function userMessage(user){
    document.write(`<h3> O que deseja fazer hoje, ${user}</h3>`);
}

//invocando a função passsando um argumento
userMessage(user);

//função com mais de um parâmetro

const n1 = 10;
const n2 = 5;

function soma(n1, n2){

    let resultado = n1+n2;
    document.write(`A soma de ${n1} + ${n2} é igual a ${resultado}.`);
}
// A ordem de recebimento da função e a de envio deve ser a mesma 
soma(n1,n2);