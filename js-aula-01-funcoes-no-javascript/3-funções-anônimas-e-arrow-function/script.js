const mult = function (x) {
  return x * 2;
};

const x = 15;
document.write(`O resultado da multiplacação é ${mult(x)}`);

const triplo = (y) => {
  return y * 3;
};

const y = 100;

document.write(`<p>O triplo de ${y} é ${triplo(y)}`);

// FUNÇÃO SETA - COM MAIS DE UM PARÂMETRO
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// eval no JavaScript é uma função nativa que realiza cálculos matemáticos a partir de dois números e um operador.

const num1 = 8;
const operador = "*";
const num2 = 2;

document.write(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`,
);

// FUNÇÃO IMEDIATA - (IIFE - Immediately Invoked Function Expression)
const imediata = (function () {
    document.write("<p> Estou sendo executada imadiatamente!</p>");
})() // passando os parâmetros


// FUNÇÃO IMEDIATA - COM PARÂMETROS
const loadUser = (function (user) {
    document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong></p<`);
    // Mostrando as informações após 3 segundos
    setTimeout(() => {
        document.write(`
            Nome: Pamela <br>
            Idade: 19 anos <br>
            Cidade: Miracatu <br>
            Hobby: Artesanato <br>
            `)
    }, 3000);
})("Pamela"); //Passando o parâmetro