

function verificaChute(){
    const numero = +chute


    if (Number.isNaN(numero) ) {

    window.alert('Valor inválido')


}

if (NumeroMaiorMenor(numero)) {
    window.alert(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
}
} 

function NumeroMaiorMenor (numero){
    return numero > maiorValor || numero < menorValor


}

