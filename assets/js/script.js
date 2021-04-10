const startButton = document.getElementById("start")
const startScreen = document.getElementById("start-screen")
const questionsElement = document.getElementById("questions")
const qelement = document.getElementById("question-title")
let shuffledQuestions, currentQuestionIndex
var timeInterval
let tElement =document.getElementById("time")
let clock = 90
let endE1 =document.getElementById('end-screen')
const submitButton =document.getElementById ("submit")
let initialsE1=document.getElementById("initials")
let highScore= clock + 1

//starting the game
startButton.addEventListener("click", startGame)
function startGame(){
    startButton.classList.add("hide")
    startScreen.classList.add("hide")

timeInterval =setInterval(function(){
    tElement.textContent=clock;
    clock--
    if (clock < 0){
        clearInterval(timeInterval);
        endE1.classList.remove("hide")
        startScreen.classList.remove("hide")
        questionsElement.classList.add("hide")
    }
},1000)    


//Questions being asked
shuffledQuestions =question.sort(()=>Math.random()- .5)
currentQuestionIndex= 0
questionsElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestions(shuffleQuestions[currentQuestionIndex])
}

function showQuestions(question){
    qelement.innerText =question.question
    questions.answers.forEach(answer=>{
        const button= document.createElement('button')
        button.innerText=answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
    })
}