falaOi();

function falaOi(){
console.log('oi');
};


const nome = function(){
    console.log('sou um dado');
};

nome();

function executaFunction(funcao){
    console.log('Vou executar função');
    funcao();
}

executaFunction(nome);

//Arrow Funcion

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//Dentro de um objeto

const obg = {
    falar(){
        console.log("Estou falando");
    }
};

obg.falar();
