const numeros = [1,2,3,4,5];

//Somar todos os numeros;
const total = numeros.reduce((acumulador, valor)=>{
    acumulador += valor;
    return acumulador;
},0);
//Retornar array de pares-> Usa filter
const pares = numeros.reduce((acumulador, valor) => {
    if(valor%2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

//Retornar com o dobro dos valores
const dobros = numeros.reduce((acumulador, valor)=>{
    acumulador.push(valor*2);
    return acumulador;
}, []);

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'toddy', idade: 5},
    {nome: 'lucky', idade: 6},
    {nome: 'tico', idade: 1},
    {nome: 'wayne', idade: 2},
    {nome: 'momo', idade: 2},
    {nome: 'jacare', idade: 73},
];

//Retornar a pessoa mais velho
const maisVelha = pessoas.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
},);

console.log(total);
console.log(pares);
console.log(dobros);
console.log(maisVelha);