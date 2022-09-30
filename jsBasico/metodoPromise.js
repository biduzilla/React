function esperarAe(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject(false);
            return;
        } 

        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
    
}

function aleatorio(min, max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min) + min);
}

//Promise.all Promice.race Promise.resolve Promise.reject
const promises = [
    esperarAe('Promise 1', 3000),
    esperarAe('Promise 2', 2000),
    esperarAe('Promise 3', 4000),
];
//Resolve todas
Promise.all(promises)
.then(valor=>{
    console.log(valor)
})
.catch(error=>{
    console.log(error);
});


//Resolve a promise mais rápida
Promise.race(promises)
.then(valor=>{
    console.log(valor)
})
.catch(error=>{
    console.log(error);
});

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em Cache');
    } else {
        return esperarAe('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina=>{
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));