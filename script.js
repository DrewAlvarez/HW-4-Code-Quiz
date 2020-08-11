var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");


var remainingSeconds = 60;

function startQuiz() {
    var timerId = setInterval(function(){
        remainingSeconds--
        timer.textContent = Math.floor(remainingSeconds)
        if (remainingSeconds < 0){
            clearInterval(timerId);
            timer.textContent = 0;
        }
    }, 1000)
}

startButton.addEventListener("click", startQuiz);