var timer = document.getElementById("timerCount");
var secondsLeft = 100;
var quizQuestions = document.getElementById("questions");
var startQuizButton = document.getElementById("startQuizButton")


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

var questions = [{
  Question1: "Commonly used data types do NOT include which of the following?",
  Answers: ["strings", "booleans", "alerts", "numbers"]
},

{
  Question2: "The condition in an if / else statement is enclosed with ______?",
  Answers: ["quotes", "curly brackets", "parenthesis", "square brackets"]
},

{
  Question3: "Arrays in JavaScript can be used to store ______?",
  Answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
},

{
  Question4: "String values must be enclosed within ______ when being assigned to variables?",
  Answers: ["commas", "curly brackets", "quotes", "parenthesis"]
},

  {
  Question5: "A very useful tool used during development and debugging for printing content to the debugger is?",
  Answers: ["JavaScript", "terminal/bash", "for loops", "console.log"]
}]
console.log(questions);

setTime();
}



startQuizButton.addEventListener("click", codingQuiz);
