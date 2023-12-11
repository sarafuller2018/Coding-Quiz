var goBackButtonEl = document.getElementById("goBackButton");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
var clearHighScoresButtonEl = document.getElementById("clearHighScoresButton");

function renderMessage() {
    // var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    if (scoreData !== null) {
        document.getElementById("highScoreMessage").textContent = scoreData.initials + " - " + scoreData.highScore
    }
}

function saveScore() {
    // var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    console.log(scoreData);
};

function renderScores() {
    highScores.forEach(function (scoreData) {
        var scoreElement = document.createElement("p");
        console.log(scoreData);
        scoreElement.textContent = scoreData.initials + " - " + scoreData.highScore;
        console.log(scoreElement);
        document.getElementById("highScores").appendChild(scoreElement);
    })
}

function init() {
    saveScore();
    renderScores();
    renderMessage();
}


function clearValues() {
    alert("Local Storage cleared!");
    scoreData="";
    highScores="";
    document.getElementById("highScores").textContent = "";
    document.getElementById("highScoreMessage").textContent = "";
    console.log("scoreData after string clear", scoreData);
    console.log("highScores after string clear", highScores);
};

clearHighScoresButtonEl.addEventListener("click", clearValues);

init();
