const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'toddy', idade: 5},
    {nome: 'lucky', idade: 6},
    {nome: 'tico', idade: 1},
    {nome: 'wayne', idade: 2},
    {nome: 'momo', idade: 2},
];

const numeros = [10,2,31,4,5,68,7,85,9];

//Dobre os numeros
const numDobrados = numeros.map(valor => {
    return valor * 2;
});

//Para cada elemento com apenas uma String com o nome da pessoa
const nomes = pessoas.map(valor => {
    return valor.nome;
});

//Remove apenas a chave "nome" do objeto;
const idades = pessoas.map(valor =>{
    return {idade: valor.idade};
});

//Id para cada objeto
const ids = pessoas.map((valor, index) =>{
     const obj = {...valor};
     obj.id = index + 1;
     return obj;
});


console.log(numDobrados);
console.log(nomes);
console.log(idades);
console.log(ids);
console.log(pessoas);