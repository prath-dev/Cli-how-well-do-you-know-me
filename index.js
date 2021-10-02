
   
var readlineSync = require("readline-sync");
var  chalk = require("chalk"); 

console.log(chalk.blue("Welcome to the quiz - How well do you know me? \n"));

var userName = readlineSync.question("May I have your name please? \n");

var acceptance = readlineSync.question(chalk.red("\nAre you ready for quiz game play? \n"));

score=0
function Quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    score = score + 1;
    console.log("Correct Answer, keep going ");
    console.log(chalk.yellow("Your current score is: " + score));
    console.log("_______________________________\n");

  }
  else {
    score = score - 1;
    console.log("Wrong answer, was not expecting this . ");
    console.log(chalk.green("Your current score is: " + score));
    console.log("_______________________________\n");
  }

}

var questionOne = {question:"\nWhere is my village? " , answer: "malvan" };
var questionTwo = {question:"What do i like most? " , answer:"dog"};
var questionThree = {question:"my IPL TEAM? " , answer: "delhi" };
var questionFour = {question: "Who is my crime partner" , answer: "rahul"};
var questionFive = {question: "Which movies i  like? " , answer: "comedy" };

var arrayOfQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive ];

for(var i=0; i<arrayOfQuestions.length; i=i+1){
  var currentQuestion = arrayOfQuestions[i];
  Quiz(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.blue("\nYou scored " + score + " out of 5."));