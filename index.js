let chalk = require('chalk');
let readlinesync = require("readline-sync");
let username = readlinesync.question("Put your name.");
console.log(chalk.yellow(`Hey ${username},Welcome to How well do you know Rittik?`));
let score = 0;
function play(question, answer) {
  let inputAnswer = readlinesync.question(question);
  if (inputAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.blue("Your answer is right"));
    score++;
  }
  else {
    console.log(chalk.red("Your answer is wrong"))
    score--;
  }
  console.log(`Your score is ${score}`);
  console.log("-------------------");

}
let listOfQuestions = [
  {
    question: "Where do i live?",
    answer: "Kolkata",
  },
  {
    question: "What is my favourite food?",
    answer: "Biriyani",
  },
  {
    question: "What is my title?",
    answer: "Das",
  },
  {
    question: "What is my favourite Web Series? ",
    answer: "Breaking Bad",
  }, {
    question: "What is favourite game?",
    answer: "Football",
  }
]
let highScores = [
  {
    name: "Rittik",
    score: 4,
  },
  {
    name: "Rimi",
    score: 3,
  },
]



for (let i = 0; i < listOfQuestions.length; i++) {
  play(chalk.bold(listOfQuestions[i].question)
    , listOfQuestions[i].answer);
}

// console.log(`High score is ${highScores[0].score}`);

if (score >= highScores[1].score) {
  console.log(chalk.bgCyanBright(`Yay!!You are now one of the highest scorer.`));
  console.log(`Send me a screenshot and i will update the scorer list.`);
}