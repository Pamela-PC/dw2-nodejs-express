const data = new Date();

document.write(`${data}`);

const dia = data.getDate();
const mes = data.getMonth()+1;
const ano = data.getFullYear();

document.write(`<p>${dia}/${mes}/${ano}</p>`);

const compraInternacional = 700.5;

document.write(`<p> 
    ${compraInternacional.toLocaleString("en",{
        style: "currency",
        currency: "USD"
    })}
    </p>`);
 
const conversao = compraInternacional*5.16;

document.write(`<p>${conversao.toLocaleString("pt-br",{
    style:"currency",
    currency: "BRL"
})}</p>`);

data.setDate(data.getDate()+12);
data.setMonth(data.getMonth()+1);
document.write(`<p>${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</p>`);

const nome = "pamela candido";
const nomeFormatado = nome.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
document.write(`<p>${nomeFormatado}</p>`);