var startButton = document.querySelector("#start");
var startText = document.querySelector("#quizStartText")
var timer = document.querySelector("#timer");
var questionEl = document.createElement("h3");
var quizBox = document.querySelector("#quiz-area")
var idx = 0;
var score = 0;

function start(){
    startText.textContent = "The following quiz is timed, answer correctly to obtain a high score. Correct answers award 5 points. Wrong answers will reduce your time by 5 seconds. Must choose the correct answer to advance."
    startButton.textContent = "Click her to start";
}
start();

var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hypertype Median Language","Hypertext Markup Language", "Hypertext Modular Lines","Nothing"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "Which one of the Following is not a 'Semantic Element' in HTML?",
        answers: ["<object>","<footer>", "<main>","<artcle>"],
        correctAnswer: "<object>"
    },
    {
        question: "CSS styling is written in which element of an HTML document?",
        answers: ["<body>", "<div>", "<head>","<footer>"],
        correctAnswer: "<head>"
    },
    {
        question: "In the CSS Box Model, which of the following is the outer most part of the box?",
        answers: ["border","content", "padding","margin"],
        correctAnswer: "margin"
    },
    {
        question: "In JavaScript, if you create an element and you want add it to your HTML, you must ____/____ it.",
        answers: ["push/pull","attach/affix", "append/prepend","adjoin/join"],
        correctAnswer: "append/prepend"
    }
]

function questionFunc(){
    startButton.style.display = "none";
    startText.style.display = "none";
    questionEl.textContent = questions[idx].question;
    quizBox.appendChild(questionEl);
    
    for(i=0; i < questions[idx].answers.length; i++){
        var answerChoice = document.createElement("button");
        answerChoice.setAttribute("class", "btn btn-info btn-lg btn-block");
        answerChoice.textContent = questions[idx].answers[i];
        quizBox.append(answerChoice);
    
        answerChoice.addEventListener("click", function(){
            var choice = this.textContent
            if (choice === questions[idx].correctAnswer){
                quizBox.innerHTML = "";
                score = score + 5;
                idx++;
                if (idx<5){
                    questionFunc();
                }else{
                    endQuiz()
                }
            }else{
                quizBox.innerHTML = "";
                remainingSeconds = remainingSeconds - 5;
                idx++;
                if (idx<5){
                    questionFunc();
                }else{
                    endQuiz()
                }
            }

        });

    }
    return;
}

function endQuiz(){
    quizBox.innerHTML = "";
    questionEl.textContent = "Congradulations! Your score is " + score + ". Please enter your initials."
    quizBox.appendChild(questionEl);
    var initForm = document.createElement("FORM");
    initForm.setAttribute("id", "myForm");
    var initInput = document.createElement("INPUT");
    initInput.setAttribute("type", "text")
    initInput.setAttribute("id", "initials")
    initForm.appendChild(initInput);
    quizBox.appendChild(initForm);
    initForm.addEventListener("submit", function(event){
        event.preventDefault();
        var inits = document.querySelector("#initials").value;
        var hS = {initials: inits, score: score};
        localStorage.setItem("High Scores", JSON.stringify(hS));

    })
    
}

var remainingSeconds = 60;


function startQuiz() {
    var timerId = setInterval(function(){
        remainingSeconds--
        timer.textContent = Math.floor(remainingSeconds)
        if (remainingSeconds < 0 || idx === 5){
            clearInterval(timerId);
            timer.textContent = 0;
            endQuiz();

        }
        if (remainingSeconds < 6){
            document.querySelector("#timer-bg").style.backgroundColor = "red";
        }
    }, 1000)

    questionFunc()


}


startButton.addEventListener("click", startQuiz);