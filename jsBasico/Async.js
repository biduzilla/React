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

// esperarAe('fase 1', aleatorio(0,3))
//     .then(valor=>{
//         console.log(valor)
//         return esperarAe('fase 2', aleatorio(0,3))
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperarAe('fase 3', aleatorio(0,3))
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

async function execute(){
    try{
        const fase1 = await esperarAe('fase 1', aleatorio(0,3));
        console.log(fase1);
    
        const fase2 = await esperarAe('fase 2', aleatorio(0,3));
        console.log(fase2);
    
        const fase3 = await esperarAe(1111, aleatorio(0,3));
        console.log(fase3);
    }catch(e){
        console.log(e);
    }
}

execute();