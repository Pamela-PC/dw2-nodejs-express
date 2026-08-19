//VETORES NO JAVASCRIPT
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

let aluno = "Matheus"
//typeof -. mostra o tipo das variáveis

document.write(`O tipo da variável que recebe um vetor no javascript é: <strong> ${typeof(produtos)}</strong>`);

document.write(`<br><br> O tipo da variável aluno é: <strong>${typeof(aluno)}</strong>`);

document.write("<br><br>Exibindo os itens do vetor pelo índice: ");

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write("<br>Exibindo ps itens do vetor através através do <strong>forEach: </strong>");
produtos.forEach(produto =>{
    //para cada produto da lista de "produtos", faça tal..
    document.write(`<p>${produto}</p>`);
})

document.write("<br>Exibindo os itens do vetor e os índices de cada item: ");
produtos.forEach((produto,indice)=>{
    document.write(`<p>${indice+1} - ${produto}</p>`);
})