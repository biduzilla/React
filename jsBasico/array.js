const numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(numeros[1][2]);

const [,[, cinco]] = numeros;

console.log(cinco);

const [lista1,lista2,lista3] = numeros;

console.log(lista2[1]);