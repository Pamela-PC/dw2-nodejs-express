//MÉTODOS DE MANIPULAÇÃO DE VETORES

let frutas = ["Laranja", " Maça", " Banana"];
document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = " Morango";
document.write(`<p>Agora a lista é: ${frutas}</p>`);

//MÉTODO PUSH: o método insere um novo elemento no final do vetor

frutas.push(" Abacaxi");
document.write(`<p>Agora a lista é: ${frutas}</p>`);

//MÉTODO UNSHIFT: insere um elemento no inicio do vetor

//frutas[0] = " Pera"; 

frutas.unshift("Pera ");
document.write(`<p>Agora a lista é: ${frutas}</p>`);

//MÉTODO LENGTH: retorna o número de elementos do vetor

document.write(`<p>Na nossa lista temos ${frutas.length} frutas</p>`);

//MÉTODO SORT: ordena os itens do vetor

document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();
document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

//MÉTODO SORT: ordenando em ordem CRESCENTE e DECRESCENTE

let numeros = [6, 8, 2, 9, 3, 800, 200];

document.write(`<p>Os números são: ${numeros}</p>`);

//O sort padrão não ordena os números de forma correta, ele funciona apenas para String
document.write(`<p>Os números ordenados são: ${numeros.sort()}</p>`);


//ORDENANDO CORRETAMENTE OS NÚMEROS
//ORDEM CRESCENTE
document.write(`<p>Os números ordenados de forma crescente ;são: ${numeros.sort((a,b)=> a-b)}</p>`);
//ORDEM DECRESCENTE
document.write(`<p>Os números ordenados de forma decrescente ;são: ${numeros.sort((a,b)=> b-a)}</p>`);

