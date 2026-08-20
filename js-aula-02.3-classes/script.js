//CLASSES NO JAVASCRIPT
class Carro{
//Nome de classes devem iniciar com a primeira letra maiúscula

//ATRIBUTOS
constructor(marca,modelo,ano){

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

//MÉTODOS
buzinar(){
    return "Beep!Beep!";

    }
  }

//Criando instância(objeto) da classe carro
const carroPopular = new Carro("fiat", "uno", "2012");

//Acessando os ATRIBUTOS e MÉTODOS do objeto
document.write(`
        <p>O carro ${carroPopular.marca}, modelo ${carroPopular.modelo}, é de ${carroPopular.ano} e quando ele buzina ele faz ${carroPopular.buzinar()}</p>`);
  