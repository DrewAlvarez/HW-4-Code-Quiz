var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var questionBox = document.querySelector("#questions");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var increment = 0;
var score = 0;

function start(){
    questionBox.textContent = "The following quiz is timed, answer correctly to obtain a high score. Correct answers award 5 points. Wrong answers will subtract 1 point and reduce your time by 5 seconds. Must choose the correct answer to advance."
    startButton.textContent = "Click her to start";
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    return;
}
start();

var questions = [
    {
        question: "This is question 1?",
        answers: ["ans 1.1","ans 1.2", "ans 1.3","ans 1.4"],
        correctAnswer: "ans 1.2"
    },
    {
        question: "This is question 2?",
        answers: ["ans 2.1","ans 2.2", "ans 2.3","ans 2.4"],
        correctAnswer: "ans 2.1"
    },
    {
        question: "This is question 3?",
        answers: ["ans 3.1","ans 3.2", "ans 3.3","ans 3.4"],
        correctAnswer: "ans 3.3"
    },
    {
        question: "This is question 4?",
        answers: ["ans 4.1","ans 4.2", "ans 4.3","ans 4.4"],
        correctAnswer: "ans 4.4"
    },
    {
        question: "This is question 5?",
        answers: ["ans 5.1","ans 5.2", "ans 5.3","ans 5.4"],
        correctAnswer: "ans 5.3"
    }
]

function questionFunc(){
    startButton.style.display = "none";
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    questionBox.textContent = questions[increment].question;
    answer1.textContent = questions[increment].answers[0]
    answer2.textContent = questions[increment].answers[1]
    answer3.textContent = questions[increment].answers[2]
    answer4.textContent = questions[increment].answers[3]
    
    answer1.addEventListener("click", function(){
        var choice = this.textContent
        if (choice === questions[increment].correctAnswer){
            score = score + 5;
            increment++;
            questionFunc();
        }else{
            remainingSeconds = remainingSeconds - 5;
        }
    })
    answer2.addEventListener("click", function(){
        var choice = this.textContent
        if (choice === questions[increment].correctAnswer){
            score = score + 5;
            increment++;
            questionFunc();
        }else{
            remainingSeconds = remainingSeconds - 5;
        }
    })
    answer3.addEventListener("click", function(){
        var choice = this.textContent
        if (choice === questions[increment].correctAnswer){
            score = score + 5;
            increment++;
            questionFunc();
        }else{
            remainingSeconds = remainingSeconds - 5;
        }
    })
    answer4.addEventListener("click", function(){
        var choice = this.textContent
        if (choice === questions[increment].correctAnswer){
            score = score + 5;
            increment++;
            questionFunc();
        }else{
            remainingSeconds = remainingSeconds - 5;
        }
    })

    

}

var remainingSeconds = 60;


function startQuiz() {
    var timerId = setInterval(function(){
        remainingSeconds--
        timer.textContent = Math.floor(remainingSeconds)
        if (remainingSeconds < 0){
            clearInterval(timerId);
            timer.textContent = 0;
            setTimeout(function{
                //endscreen
            })
        }
        if (remainingSeconds < 6){
            document.querySelector("#timer-bg").style.backgroundColor = "red";
        }
    }, 1000)


    // function tester(){
    //     answer2.disabled = false;
    //     answer3.disabled = false;
    //     answer4.disabled = false;
    //     questionBox.textContent = "hello";
    //     answer1.textContent = "0";
    //     answer2.textContent = "1";
    //     answer3.textContent = "2";
    //     answer4.textContent = "3";
    //     return;
    // }
    questionFunc()

}


startButton.addEventListener("click", startQuiz);