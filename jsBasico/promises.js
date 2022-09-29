function esperarAe(msg, tempo){
    return new Promise((resolve, reject)=>{
        console.log(`Tempo: ${tempo}`);
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

esperarAe('frase 1', aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return esperarAe('frase 2', aleatorio(1,3));
})
.then(resposta =>{
    console.log(resposta);
    return esperarAe('frase 2', aleatorio(1,3));
})
.catch();
;