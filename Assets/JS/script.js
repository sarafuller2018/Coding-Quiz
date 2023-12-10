var timer = document.getElementById("timerCount");
var secondsLeft = 100;
var quizQuestions = document.getElementById("quizQuestions");
var startQuizButton = document.getElementById("startQuizButton");
var intro = document.getElementById("codingQuizIntro");
var introContainer = document.getElementById("introContainer");
var questionsEl = document.getElementById("questions");
var answerOptionsEl = document.querySelectorAll(".answerOptions");
var currentQuestion = 0;
var score = 0;
var answerAlertEl = document.getElementById("answerAlert");

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

var codingQuiz = function () {
  //make the function for the coding quiz to start here
  introContainer.classList.add('hide');
  quizQuestions.classList.remove('hide');
  setTime();
  renderQuizQuestions();
}

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
console.log(questions);

var renderQuizQuestions = function () {
  questionsEl.textContent = questionsArray[currentQuestion].Question;

  for (i = 0; i < questionsArray[currentQuestion].Answers.length; i++) {
    answerOptionsEl[i].textContent = questionsArray[currentQuestion].Answers[i]
  }
}

var checkAnswer = function (event) {
  event.preventDefault()
  var userAnswer = event.target.textContent
  var userSelection = event.target.getAttribute("data-value")
  console.log(userAnswer, userSelection)

  if (userSelection == questionsArray[currentQuestion].Correct) {
    answerAlertEl.textContent = "Correct!"
  } else {
    answerAlertEl.textContent = "Incorrect!";
    secondsLeft -= 10; //secondsLeft = secondsLeft - 10
  }

  if (secondsLeft == 0) {
    //take user to game over section
  }
  
  
  if (currentQuestion < questionsArray.length) {
    currentQuestion++;
    renderQuizQuestions();
  } else {

  }
}

startQuizButton.addEventListener("click", codingQuiz);

for (i = 0; i < answerOptionsEl.length; i++) {
  answerOptionsEl[i].addEventListener("click", checkAnswer)
}

questionsArray.style("color pink")