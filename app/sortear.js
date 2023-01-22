const menorValor = 1;
const maiorValor = 100;


const NumeroSecreto = sorteia();




function sorteia () {
    return parseInt(Math.random()* maiorValor + 1 )

    

}

console.log('Número secreto:', NumeroSecreto)


const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor


const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor