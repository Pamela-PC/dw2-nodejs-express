class Heroi{

    constructor(nome, vida, velocidade, forca){

        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;

    }

    correr(){
        return "está correndo";
    }
    
    andar(){
        return "está andando";
    }

    atacar(){
        return "está atacando";
    }

    defender(){
        return "está se defendendo";
    }
}

const homemAranha = new Heroi("Homem Aranha", "100%", "100%", "50%" );
homemAranha.teia = 1;
homemAranha.sentidoAranha = function(){
    return "detectou perigo pelo Sentido Aranha";
}


const superMan = new Heroi("Superman", "100%", "75%", "100%");
superMan.voar = 1;
superMan.visaoCalor = function(){
    return "está utilizando a visão de calor";
}

const batMan = new Heroi("Batman", "100%", "100%", "100%");
batMan.esconder = 1;
batMan.investigar = function(){
    return "está investigando o crime";
}

document.write(`<p>O herói ${batMan.nome} ${batMan.correr()}</p>`);
document.write(`<p>${superMan.nome}</p>`);
document.write(`<p>O ${homemAranha.nome} ${homemAranha.sentidoAranha()}</p>`);