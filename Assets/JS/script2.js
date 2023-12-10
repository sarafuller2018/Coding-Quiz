var goBackButtonEl = document.getElementById("goBackButton");

function renderMessage() {
    var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    if (scoreData !== null) {
        document.getElementById("highScoreMessage").textContent = scoreData.initials + " - " + scoreData.highScore
    }
}

renderMessage();

function saveScore(scoreData) {
    var highScores = JSON.parse(localStorage.getItem("highScoreInfo")) || [];
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    }
        
function renderScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.forEach(function(scoreData) {
        var scoreElement = document.createElement("p");
        scoreElement.textContent = scoreData.initials + " - " + scoreData.highscore;
        console.log(scoreElement);
        document.getElementById("highScores").appendChild(scoreElement);
    });

}

function init() {
    saveScore();
    renderScores();
}

init();