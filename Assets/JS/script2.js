var goBackButtonEl = document.getElementById("goBackButton");

function renderMessage() {
    var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    if (scoreData !== null) {
        document.getElementById("highScoreMessage").textContent = scoreData.initials + " - " + scoreData.highScore
    }
}

function saveScore() {
    var highScores = [];
    var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
};

function renderScores() {
    highScores.forEach(function (scoreData) {
        var scoreElement = document.createElement("p");
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

init();