var timer = document.getElementById("timerCount");
var secondsLeft = 100;
var quizQuestions = document.getElementById("quizQuestions");
var startQuizButton = document.getElementById("startQuizButton");
var intro = document.getElementById("codingQuizIntro");


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

var codingQuiz = function() {
//make the function for the coding quiz to start here
intro.classList.add('hide');

setTime();
}

var questions = [{
  Question: "Commonly used data types do NOT include which of the following?",
  Answers: ["strings", "booleans", "alerts", "numbers"]
},

{
  Question: "The condition in an if / else statement is enclosed with ______?",
  Answers: ["quotes", "curly brackets", "parenthesis", "square brackets"]
},

{
  Question: "Arrays in JavaScript can be used to store ______?",
  Answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
},

{
  Question: "String values must be enclosed within ______ when being assigned to variables?",
  Answers: ["commas", "curly brackets", "quotes", "parenthesis"]
},

  {
  Question: "A very useful tool used during development and debugging for printing content to the debugger is?",
  Answers: ["JavaScript", "terminal/bash", "for loops", "console.log"]
}]
console.log(questions);

startQuizButton.addEventListener("click", codingQuiz);
