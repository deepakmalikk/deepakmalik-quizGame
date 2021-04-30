var readLineSync=require('readline-sync')
var chalk=require('chalk');
var score=0;
var userInput=readLineSync.question("\nCan you please tell me your name? ")


console.log(chalk.yellow.bold("Hello",userInput,"! lets play a game. "));

console.log(chalk.blue("This game will Ask You question realted"));
console.log(chalk.blue("to Deepak Malik."));

console.log("-------- \n")

 

function play(question,answer){
  
  var userInput1=readLineSync.question(question)
  
  if(userInput1.toLowerCase()==answer){
    console.log("   You are right!")
  
    score=score+1;

  }else{
    console.log("   SORRY ! You are wrong!")
  }
}

var Game=[
  {  question: "1. What is Deepak surname? ",
     answer: "malik"},
  {
    question: "2.What is Deepak Age? ",
    answer: 20
  },
  {
    question: "3. What is Deepak profession? ",
    answer: "student"
  },
  {
    question: "4. Where is Deepak curently staying? ",
    answer: "bangalore"
  },
  {
    question: "5. Deepak is from which state? ",
    answer: "haryana"
  }
]

for(var i=0; i<Game.length; i++){
  
  play(Game[i].question,Game[i].answer)
 console.log("   Cureent score  : ",chalk.red(score))
}
console.log("----****----")
console.log(chalk.cyanBright("  Your total score is : ",score))
if(score==5){
  console.log( chalk.green.bold("  You won this Game!"))
}
else{
  console.log(chalk.redBright.bold("  You lost this Game!"))
}






