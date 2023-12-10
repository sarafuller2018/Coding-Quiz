var goBackButtonEl = document.getElementById("goBackButton");

function renderMessage() {
    var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    if (scoreData !== null) {
        document.getElementById("highScoreMessage").textContent = scoreData.initials + " - " + scoreData.highScore
    }
}

function renderLastHighScore() {
    var savedScoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
    console.log(savedScoreData);

    if (savedScoreData !== null) {
        document.getElementById("savedName").innerHTML = savedScoreData.initials;
        document.getElementById("savedScore").innerHTML = savedScoreData.highScore;
    }
}

function init() {
    renderMessage();
    renderLastHighScore();
}

init();
