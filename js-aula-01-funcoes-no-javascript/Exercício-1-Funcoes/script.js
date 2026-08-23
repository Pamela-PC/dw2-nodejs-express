document.write("<strong>Função Simples</strong>");

function dadosPessoais(){
    const dados = "<p>Nome: Pamela <br> Idade: 19 anos <br> Cidade: Miracatu</p>";
    document.write(dados);
} 
dadosPessoais();

document.write("<strong>Função com Parâmetros</strong>");


const num1 = 50;
const num2 = 5;
function divisao(num1, num2){
    let result = num1/num2;
    document.write(`<p>O resultado da divisão foi ${result}</p>`);
}
divisao(num1,num2);

document.write("<strong>Função com retorno</strong>");

const n1 = 5;
const n2 = 19;
const n3 = 7;
function multiplicar(num1, num2, num3){
    return num1*num2*num3;
}

document.write(`<p>O resultado da multiplicação entre ${n1}, ${n2} e ${n3} é: ${multiplicar(n1, n2, n3)}</p>`);

document.write("<strong>Função com mais de um retorno <br><br></strong>");

const idade = 19
function maiorMenor(idade){

    if(idade >= 18){
        return "Maior de Idade";
    }
    else{
        return "Menor de Idade";
    }

}

document.write(`Você é ${maiorMenor(idade)}<br><br>`);

document.write("<strong>Função Anônima </strong><br><br>");

nota1 = 5;
nota2 = 7;
med = (nota1+nota2)/2;
const media = function(nota1, nota2){
    if(med<=5){
        return "Reprovado";
    }
    else{
        return "Aprovado";
    }
}

document.write(`O aluno está ${media(nota1, nota2)}`);

document.write("<br><br><strong> Arrow Function com parâmetro único</strong><br>");

const triplo = (n) =>{
    return n*3;
}
const n = 55;
document.write(`<p>O triplo de ${n} é igual a ${triplo(n)}</p>`);

document.write("<strong> Arrow Function com mais de um parâmetro</strong> <br><br>")

const soma = (nu1, nu2, nu3, nu4) => {
    return nu1+nu2+nu3+nu4;
}
const nu1 = 5;
const nu2 = 10;
const nu3 = 8;
const nu4 = 7;
document.write(`<o> O resultado da soma entre os números é ${soma(nu1, nu2, nu3, nu4)}</p>`);

document.write("<strong>IIFE</strong><br><br>");
//Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma
//saudação a essa pessoa.
const saudação = (function (usuario) {
    document.write(`Seja Bem-Vindo(a) ${usuario}`);
})("Pamela")