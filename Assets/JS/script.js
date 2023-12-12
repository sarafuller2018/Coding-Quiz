var timer = document.getElementById("timerCount");
var secondsLeft = 50;
var quizQuestions = document.getElementById("quizQuestions");
var startQuizButton = document.getElementById("startQuizButton");
var intro = document.getElementById("codingQuizIntro");
var introContainer = document.getElementById("introContainer");
var questionsEl = document.getElementById("questions");
var answerOptionsEl = document.querySelectorAll(".answerOptions");
var currentQuestion = 0;
var score = 0;
var answerAlertEl = document.getElementById("answerAlert");
var allDoneContainerEl = document.getElementById("allDoneContainer");
var finalScoreSpan = document.getElementById("finalScore");
var initialsSubmitButton = document.getElementById("submitButton");
var initialsEl = document.getElementById("initials");

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;


    if (secondsLeft <= 0 || currentQuestion == questionsArray.length) {
      // Stops execution of action at set interval and changes to allDone container
      clearInterval(timerInterval);
      quizQuestions.classList.add('hide');
      allDoneContainerEl.classList.remove('hide');

      if (secondsLeft <= 0) {
        secondsLeft = 0;
      }
    }

    // Places secondsLeft as the user's final score on page
    finalScoreSpan.textContent = secondsLeft;

    timer.textContent = "Timer: " + secondsLeft;

  }, 1000);
}

// Executes when start quiz button is clicked, starts timer and brings up first question
var codingQuiz = function () {
  introContainer.classList.add('hide');
  quizQuestions.classList.remove('hide');
  setTime();
  renderQuizQuestions();
}

// Array of objects that contain questions, answers, and correct answer
var questionsArray = [{
  Question: "Commonly used data types do NOT include which of the following?",
  Answers: ["strings", "booleans", "alerts", "numbers"],
  Correct: 2
},

{
  Question: "The condition in an if / else statement is enclosed with ______?",
  Answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  Correct: 2
},

{
  Question: "Arrays in JavaScript can be used to store ______?",
  Answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  Correct: 3
},

{
  Question: "String values must be enclosed within ______ when being assigned to variables?",
  Answers: ["commas", "curly brackets", "quotes", "parenthesis"],
  Correct: 2
},

{
  Question: "A very useful tool used during development and debugging for printing content to the debugger is?",
  Answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
  Correct: 3
}]
console.log(questionsArray);

// Takes user through each question one by one until the last question is answered
var renderQuizQuestions = function () {
  if (currentQuestion < questionsArray.length) {
    for (i = 0; i < questionsArray[currentQuestion].Answers.length; i++) {
      questionsEl.textContent = questionsArray[currentQuestion].Question;
      answerOptionsEl[i].textContent = questionsArray[currentQuestion].Answers[i];
    }
  } else {
    quizQuestions.classList.add('hide');
    allDoneContainerEl.classList.remove('hide');
  }
};

// Checks answer and notifies if correct or incorrect
var checkAnswer = function (event) {
  event.preventDefault()
  var userAnswer = event.target.textContent
  var userSelection = event.target.getAttribute("data-value")
  console.log(userAnswer, userSelection);

  if (userSelection == questionsArray[currentQuestion].Correct) {
    answerAlertEl.textContent = "Correct!";
  } else {
    answerAlertEl.textContent = "Incorrect!";
    secondsLeft -= 10; //secondsLeft = secondsLeft - 10
  }

  // Ends quiz when timer reaches 0
  if (secondsLeft <= 0) {
    quizQuestions.classList.add('hide');
    allDoneContainerEl.classList.remove('hide');
  }

  // Increments questions until the last question is reached
  if (currentQuestion < questionsArray.length) {
    currentQuestion++;
    renderQuizQuestions();
  }
}

// Begins quiz
startQuizButton.addEventListener("click", codingQuiz);

// Checks answers as user selects answers
for (i = 0; i < answerOptionsEl.length; i++) {
  answerOptionsEl[i].addEventListener("click", checkAnswer)
}

// Takes initials and score and stores in localStorage
initialsSubmitButton.addEventListener("click", function () {
  var highScoreInfo = {
    initials: initialsEl.value.trim(),
    highScore: secondsLeft
  };

  localStorage.setItem("highScoreInfo", JSON.stringify(highScoreInfo));
  console.log("highScoreInfo");
});