const startButton = document.getElementById("start")
const startScreen = document.getElementById("start-screen")
const questionsElement = document.getElementById("questions")
const qelement = document.getElementById("question-title")
let shuffledQuestions, currentQuestionIndex
const answerElement= document.getElementById("answer-buttons")
const finalScore= document.getElementById("final-score")
let countRightAnswers=0
var timeInterval
let tElement =document.getElementById("time")
let clock = 90
let endEl =document.getElementById('end-screen')
const submitButton =document.getElementById ("submit")
let initialsEl=document.getElementById("initials")
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
        endEl.classList.remove("hide")
        startScreen.classList.remove("hide")
        questionsElement.classList.add("hide")
    }
},1000)    


//Questions being asked
shuffledQuestions = question.sort(()=>Math.random()- .5)
currentQuestionIndex= 0
questionsElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question){
    qelement.innerText =question.question
    question.answers.forEach(answer=>{
        const button= document.createElement('button')
        button.innerText=answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click",selectAnswer)
        answerElement.appendChild(button)
    })
}
function resetState(){
    while(answerElement.firstChild){
        answerElement.removeChild
        (answerElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton =e.target
    const correct= selectedButton.dataset.correct

    Array.from(answerElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    setTimeout(function(){
        if(!correct){
            clock -=10
        }
    
    //next question
    currentQuestionIndex++
    if (currentQuestionIndex == question.length){
        endEl.classList.remove("hide")
        questionsElement.classList.add("hide")
        clearInterval(timeInterval)
        startScreen.classList.remove("hide")
        finalScore.innerHTML=clock
    }else{
        answerElement.innerHTML =""
        showQuestions(question[currentQuestionIndex])
    }
 }, 1000)
}
function setStatusClass (element, correct){
    if (correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
function saveScore(){
    var initials= initialsEl.value;
    if (initials != ""){
        var prevScores= JSON.parse(localStorage.getItem("saveScores")) || [];
        var updateScore ={
            score:clock,
            initials: initials
        };
    prevScores.push(updateScore);
    console.log(prevScores)
    localStorage.setItem("saveScores", JSON.stringify(prevScores))

    location.href ="highscore.html"
    }
}

submitButton.addEventListener("click", saveScore)
