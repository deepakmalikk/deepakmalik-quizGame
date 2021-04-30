var readLineSync=require('readline-sync')
var chalk=require('chalk');
var score=0;
var userInput=readLineSync.question("Can you please tell me your name? ")


console.log("Hello",userInput,"! lets play a game ");
console.log("--------")

 
console.log("*****")
function play(question,answer){
  
  var userInput1=readLineSync.question(question)
  
  if(userInput1.toLowerCase()==answer){
    console.log("You are right!")
  
    score=score+1;

  }else{
    console.log("SORRY ! You are wrong!")
  }
}

var Game=[
  {  question: "1. What is Deepak surname? ",
     answer: "malik"},{
    question: "2.What is Deepak Age? ",
    answer: 20
  },{
    question: "3. Where is Deepak curently staying? ",
    answer: "bangalore"
  },{
    question: "4. What is Deepak profession? ",
    answer: "student"
  },{
    question: "5. Deepak is a Scientist?",
    answer: "no"
  }
]

for(var i=0; i<Game.length; i++){
  
  play(Game[i].question,Game[i].answer)
 console.log("Cureent score  : ",score)
}
console.log("----****----")
console.log("Your total score is : ",score)
if(score==5){
  console.log("You won this Game!")
}


