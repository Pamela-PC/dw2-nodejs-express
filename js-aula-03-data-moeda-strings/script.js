document.write("<h3>Manipulando Datas:</h3>");

// Para começarmos a manipular datas no Javascript precisamos primeiro ccriar uma instância da classe Date, que é nativa do Javascript

const dataAtual = new Date();

document.write(dataAtual);

//Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<br><br> Hoje é dia ${dia}`);

//Pegando o mês atual
const mes = dataAtual.getMonth()+1;
document.write(`<br><br> Estamos no mês ${mes}`);

//Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<br><br> Estamos no ano: ${ano}`);

//Exibindo a data completa
document.write(`<br><br>Hoje é ${dia}/${mes}/${ano}`);

//Adicionando dias, meses e anos na data atual
//Adicionando 4 dias a data atual
dataAtual.setDate(dataAtual.getDate()+4);

//Exibindo a nova data
document.write(`<p>Daqui a 4 dias será dia: ${dataAtual.getDate()}</p>`);

//Adicionando 3 meses a data atual
dataAtual.setMonth(dataAtual.getMonth()+3);

//Exibindo a nova data
document.write(`<p>Daqui a 3 meses será mês: ${dataAtual.getMonth()+1}</p>`);

//Adicionando 2 anos a data atua
dataAtual.setFullYear(dataAtual.getFullYear()+2);

//Exibindo a nova data
document.write(`<p>Daqui a 2 anos será: ${dataAtual.getFullYear()}</p>`);

//****************************************************************************************************************/

//FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando números e moedas</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
//Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}<p>`);
//ocultando as casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}<p>`);
//Trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

//Formatando para DÓLAR (USD)
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br",{
        style: "currency",
        currency: "BRL"
    })}
    </p>`);

    document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br",{
        style: "currency",
        currency: "USD"
    })}
    </p>`);

    //********************************************************************************/
    //FORMATAÇÃO DE STRINGS
    document.write("<h3>Formatação de String</h3>");
    const nome = "Pamela Candido";

    //ALTERNANDO STRINGS PARA LETRA MAIÚSCULA
    document.write(`<p>${nome.toUpperCase()}</p>`);
    //ALTERNANDO STRINGS PARA LETRA MINÚSCULA
    document.write(`<p>${nome.toLowerCase()}</p>`);
    
    //COLOCANDO AS INICIAIS EM LETRAS MAIÚSCULAS
    const cidade = "Sete Barras";
    const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
    document.write(`<p>${cidadeFormatada}</p>`);

    //CONTANDO O NÚMERO DE CARACTERES
    document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`);