const elementoChute = document.querySelector('#chute')



window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()





recognition.addEventListener('result',onSpeak)

function onSpeak(e) {

    chute = e.results[0][0].transcript

    exibeChute(chute)
    verificaChute(chute)
}

function exibeChute (chute) {

    elementoChute.innerHTML = `
    
    <div >Você disse:</div>
        <span class="box">${chute}</span>
    
    `


}


if (NumeroSecreto > Number(chute)) {

    elementoChute.innerHTML = `
    <div>O número secreto é maior  </div>
        <i class="fa-solid fa-greater-than"></i> -->
    `


}