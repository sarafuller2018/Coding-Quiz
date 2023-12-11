var goBackButtonEl = document.getElementById("goBackButton");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scoreData = JSON.parse(localStorage.getItem("highScoreInfo"));
var clearHighScoresButtonEl = document.getElementById("clearHighScoresButton");

// Function to tell user their score
function renderMessage() {
    if (scoreData !== null) {
        document.getElementById("highScoreMessage").textContent = scoreData.initials + " = " + scoreData.highScore
    }
}

// Function to save score to localStorage
function saveScore() {
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    console.log(scoreData);
};

// Function to get scores onto webpage
function renderScores() {
    highScores.forEach(function (scoreData) {
        var scoreElement = document.createElement("p");
        console.log(scoreData);
        scoreElement.textContent = scoreData.initials + " = " + scoreData.highScore;
        console.log(scoreElement);
        document.getElementById("highScores").appendChild(scoreElement);
    })
}

// Calls these functions when page starts
function init() {
    saveScore();
    renderScores();
    renderMessage();
}

// Clears localStorage when user selects clear high scores button
function clearValues() {
    var confirmClear = confirm("Are you sure you want to clear high scores?");

    if (confirmClear == true) {
        localStorage.clear();
        document.getElementById("highScores").textContent = "";
        document.getElementById("highScoreMessage").textContent = "";
    } else {
        return;
    }
};

clearHighScoresButtonEl.addEventListener("click", clearValues);

init();
