let clearBtn=document.getElementById("clear")

if (localStorage){
    var prevScores =JSON.parse(localStorage.getItem("saveScores"))||[]
    prevScores.forEach (function (score){
        var liEL =document.createElement("li")
        liEL.textContent= score.initials + " - " + score.score;
        var UlEL =document.getElementById("score-list");
        UlEL.appendChild(liEL)
    })
}
clearBtn.addEventListener("click",clearScores)
function clearScores(){
    localStorage.removeItem("saveScores")
    window.location.reload()
}