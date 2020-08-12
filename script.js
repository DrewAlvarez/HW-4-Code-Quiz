var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var questionBox = document.querySelector("#questions")




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
        question.textContent = "This is question 1?";
        answerChoice1.textContent = "Answer choice 1.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q2)


    }
    q1();

    questionBox.appendChild(q1)
    
    function q2(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 2?";
        answerChoice1.textContent = "Answer choice 2.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q3)


    }
    
    q2();
    
    questionBox.appendChild(q2)
    
    function q3(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 3?";
        answerChoice1.textContent = "Answer choice 3.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q4)


    }
    
    q3();
    
    questionBox.appendChild(q3)
    
    function q4(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 4?";
        answerChoice1.textContent = "Answer choice 4.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q5)


    }
    
    q4();
    
    questionBox.appendChild(q4)
    
    function q5(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 5?";
        answerChoice1.textContent = "Answer choice 5.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q6)


    }
    
    q5();
    
    questionBox.appendChild(q5)
    
    function q6(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 6?";
        answerChoice1.textContent = "Answer choice 6.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q7)


    }
    
    q6();
    
    questionBox.appendChild(q6)
    
    function q7(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 7?";
        answerChoice1.textContent = "Answer choice 7.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q8)


    }
    
    q7();
    
    questionBox.appendChild(q7)
    
    function q8(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 8?";
        answerChoice1.textContent = "Answer choice 8.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q9)


    }
    
    q8();
    
    questionBox.appendChild(q8)
    
    function q9(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 9?";
        answerChoice1.textContent = "Answer choice 9.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", q10)


    }
    
    q9();
    
    questionBox.appendChild(q9)
    
    function q10(){
        questionBox.textContent = "";
        var question = document.createElement("h2");
        var answerChoice1 = document.createElement("button")
        question.textContent = "This is question 10?";
        answerChoice1.textContent = "Answer choice 10.1"
        questionBox.appendChild(question);
        questionBox.appendChild(answerChoice1);

        answerChoice1.addEventListener("click", finish)


    }
    
    q10();
    
    questionBox.appendChild(q10)

}

startButton.addEventListener("click", startQuiz);