var currentQuestionIndex = 0;
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");
var questionEl = document.getElementById("questions")
var feedBackEl = document.getElementById("feeback");
var timerEl = document.getElementById("time");
var time = 60;
var timerId;


function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        endGame()
    }
}

function startQuiz( ) {
    for (var i = 0; i <= questions.length; i++) {
        console.log(questions[0].choices[i])
    }

    var startScreen = document.getElementById("start-screen")
    startScreen.setAttribute("start-screen", "hide")
    //Timer code

    timerId = setInterval(clockTick, 1000)
    getQuestion();

}

function getQuestion() {
    var questionScreen = document.getElementById("questions")
    questionScreen.removeAttribute("class")
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHtml = '';

    currentQuestion.choices.forEach(function(choice, i) {
        var optionButton = document.createElement("button")
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice)

        optionButton.textContent = choice;
        optionButton.onclick = answerClick;
        choicesElement.appendChild(optionButton);
    })
}

function answerClick(){
    if(this.value !== questions[currentQuestionIndex].answer) {
        feedBackEl.textContent = "Incorrect."
    }

    else{
        feedBackEl.textContent = "Correct"
    }

    feedBackEl.setAttribute("class", "feedback");
        setTimeout(function(){
            
        })

    currentQuestionIndex++

        if (currentQuestionsIndexx === questions.lenght) {
            endGame();
        }
        else {
            getQuestion();
        }

}
function endGame(){
    feedBackEl.textContent = "game over"
    clearInterval(timerId);
}

startButton.onclick = startQuiz