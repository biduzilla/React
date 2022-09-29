const a1 = [1,2,3,4,5,6,7,8];

a1.forEach(valor=>{
    valor.reduce((ac, v) => ac+=v)
});

console.log(a1)