//filter - > return array

//Retornar numeros maiores que 10
const numeros = [10,2,31,4,5,68,7,85,9];

function callBackFilter(valor){
   return valor > 10;
}

const numFilters = numeros.filter(callBackFilter);
console.log(numFilters);

//funçãoo anonima
const numFilters2 = numeros.filter(function(valor) { 
    return valor > 10;
});
console.log(numFilters2);

//arrow function
const numFilters3 = numeros.filter(valor => {
    return valor > 10;
});
console.log(numFilters3);

//Retornar nomes com 5 letras ou mais
// Retornar pessoas com mais de 50 anos
//Retorna pessoas que terminam com w e m
const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'toddy', idade: 5},
    {nome: 'lucky', idade: 6},
    {nome: 'tico', idade: 1},
    {nome: 'wayne', idade: 2},
    {nome: 'momo', idade: 2},
];

const pessoasNomesGrandes = pessoas.filter(valor =>{
    return valor.nome.length >= 5;
});

const comMaisCiquentaAnos = pessoas.filter(valor => {
    return valor.idade > 50;
})

const comecaComMOuW = pessoas.filter(valor => {
    return valor.nome.toLowerCase().startsWith('m');
});
console.log(pessoasNomesGrandes);
console.log(comMaisCiquentaAnos);
console.log(comecaComMOuW);
