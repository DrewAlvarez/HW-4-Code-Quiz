var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var questionBox = document.querySelector("#questions");
var startStatment = documen.createElement("h2");
startStatment.textContent = "The following quiz is timed, answer correctly to obtain a high score on the leader board. Wrong answers will reduce your time."



var remainingSeconds = 10;

function startQuiz() {
    var timerId = setInterval(function(){
        remainingSeconds--
        timer.textContent = Math.floor(remainingSeconds)
        if (remainingSeconds < 0){
            clearInterval(timerId);
            timer.textContent = 0;
        }
        if (remainingSeconds < 6){
            document.querySelector("#timer-bg").style.backgroundColor = "red";
        }
    }, 1000)

    function q1(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        var answerChoice2 = document.createElement("button")
        var answerChoice3 = document.createElement("button")
        var answerChoice4 = document.createElement("button")
        answerChoice1.setAttribute("class", "badge badge-info")
        question.textContent = "This is question 1?";
        answerChoice1.textContent = "Answer choice 1.1";
        answerChoice2.textContent = "Answer choice 1.2";
        answerChoice3.textContent = "Answer choice 1.3";
        answerChoice4.textContent = "Answer choice 1.4";
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);
        questionBox.appendChild(answerChoice2);
        questionBox.appendChild(answerChoice3);
        questionBox.appendChild(answerChoice4);

        answerChoice1.addEventListener("click", q2)


    }
    q1();

    questionBox.appendChild(q1)
    


}

startButton.addEventListener("click", startQuiz);