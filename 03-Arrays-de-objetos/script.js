//OBJETO
const produto = {

    nome: "Computador",
    marca: "Asus",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
};

document.write(`<p>${produto}</p>`);

//Acessando os atributos do objeto

document.write(`<p>${produto.nome}, ${produto.marca}, custa R$ ${produto.preco} <br> ${produto.descricao}</p>`);

//ARRAY DE OBJETOS
const listaProdutos = [
    {
       nome: "Computador",
       marca: "Asus",
       preco: 3000,
       descricao: "PC moderno com bom desempenho",
    },

    {
        nome: "Tablet",
        marca: "samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento"
        
    }, 

    {
        nome: "Iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Ultra resistênte! Não quebra nunca!"
    }
];


//EXIBINDO AS INFORMAÇÕES COM FOREACH
document.write(`<h4>Produtos em promoção: <h4/>`);

listaProdutos.forEach(produto =>{
    document.write(`
        produto: ${produto.nome}<br>
        marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `
    );
});
