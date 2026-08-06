//FUNÇÕES COM RETORNO
const n1 = 50;
const n2 = 3;
//Essa função gera um resultado e exporta
function multiplicar(n1,n2){
    return n1*n2;
}
//EXIBINDO O RESULTADO
    document.write(`<p>A multiplicação de ${n1} por ${n2} é igual a <strong> ${multiplicar(n1,n2)}</strong>. </p>`);

//FUNÇÕES COM MAIS DE UM RETORNO
const number = 5;

function parImpar(number){
    if(number%2 == 0)
    {
     return "par";
    }
    else
    {
        return "impar";
    }
}

document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong>!<p/>`);