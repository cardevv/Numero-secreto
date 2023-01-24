

function verificaChute(){
    const numero = +chute


    if (Number.isNaN(numero) ) {

    elementoChute.innerHTML += '<div>Valor inválido</div>'

    return


}

if (NumeroMaiorMenor(numero)) {
    elementoChute.innerHTML += `<div>valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`

    return
}

if (numero === NumeroSecreto) {

    document.body.innerHTML = `  <h2>  Você acertou!</h2> 
    <h3>o numero secreto era ${NumeroSecreto}</h3>
    
    <button id="rejogar" class="btn-rejoga">Jogar Novamente</button>
    
    
    `

    

} else if (numero > NumeroSecreto) {

    elementoChute.innerHTML += 
    
    `<div>O número secreto é menor  </div>
    <i class="fa-solid fa-less-than"></i>`


} else {

    elementoChute.innerHTML += `<div>O número secreto é maior  </div>
    <i class="fa-solid fa-greater-than"></i>`
}



} 

function NumeroMaiorMenor (numero){
    return numero > maiorValor || numero < menorValor


}


document.body.addEventListener('click', e =>  {

    if (e.target.id == 'rejogar')

    window.location.reload()

})
