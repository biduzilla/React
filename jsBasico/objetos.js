const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Henrique',
    idade: 25,
    endereco: {
        rua: 'Av 3',
        numero: 320
    }
};
//Atribuição via desestruturação
const {
    nome  = '', 
    sobrenome 
} = pessoa;

const { endereco: {rua: r, numero}} = pessoa;
console.log(r, numero);