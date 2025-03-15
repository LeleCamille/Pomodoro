const PauseButton = document.getElementById('PauseButton')
const RestartButton = document.getElementById('RestartButton')
const StartButton = document.getElementById('StartButton')
const timer = document.getElementById('Timer')

let timeleft = 1500 //Numero de segundos de 25min
let interval //Atualizar o tempo a cada segundo

function updateTimer() {
    const minutes = Math.floor(timeleft / 60) //Math.floor arredonda pra numero inteiro. MINUTOS
    const seconds = timeleft % 60 //% calcula o resto da divisão por 60. SEGUNDOS

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    //InnerHTML redefine um elemento dentro do html. Nesse caso, estamos alterando o <p> a cada segundo.
    //.toString simplesmente transforma o número em texto.
}

StartButton.addEventListener('click', function startTimer(){ //Ao clicar no botão de start acontece:
    interval = setInterval(() => { //=> Repete a função (eu acho)
        timeleft-- //Tempo restante vai em ordem decrescente
        updateTimer() //Chama a função pra atualizar a tela a cada segundo
    
        if (timeleft === 0) { //Se o tempo ficar igual a 0
            clearInterval(interval)
            //Para de correr em ordem decrescente
            alert("TIME'S UP!")
            //Notificação que o tempo acabou
            timeleft = 1500
            //Restaura o tempo de volta pra 25min
            updateTimer()
            //Chama a função pra voltar ao estado original de 25min (externo)
        }
    }, 1000) //A função vai repetir a cada 1seg 
})

PauseButton.addEventListener('click', function stopTimer(){ //Ao clicar no botão Pause acontece:
    clearInterval(interval) //Para de correr em ordem decrescente
})

RestartButton.addEventListener('click', function resetTimer(){ //Ao clicar no botão Restart acontece:
    clearInterval(interval) //Para de correr em ordem decrescente
    timeleft = 1500 //Restaura o tempo pra 25min (interno)
    updateTimer() //Chama a função pra voltar ao estado original de 25min (externo)
})

