class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está a falar`);
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobreno;me = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
};

const a1 = new Pessoa('toddy','carvalho');
const a2 = new Pessoa2('toddy','carvalho');

a1.falar;
a2.falar;