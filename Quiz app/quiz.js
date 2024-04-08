var quizData = [
    {
        question:"1- Give me the acronyme of HTML",
        choice1:"Hyperlinks and Text Markup Language",
        choice2:"HyperText Markup Language",
        choice3:"Hyper Transfer Markup Language",
        choice4:"anyone of these",
        correctAnswer:"choice2"
    },
    {
        question:"2- Which of the following is not a primitive data type in JavaScript?",
        choice1:"Number",
        choice2:"String",
        choice3:"Array",
        choice4:"Boolean",
        correctAnswer:"choice3"
    },
    {
        question:"3- In Python, which of the following is used to define a function?",
        choice1:"def",
        choice2:"function",
        choice3:"define",
        choice4:"func",
        correctAnswer:"choice1"
    },
    {
        question:"4- Which symbol is used for single-line comments in JavaScript ?",
        choice1:"//",
        choice2:"'''",
        choice3:"--",
        choice4:"__",
        correctAnswer:"choice1"
    },
    {
        question:"5- In Java, what keyword is used to define a constant?",
        choice1:"constant",
        choice2:"final",
        choice3:"static",
        choice4:"const",
        correctAnswer:"choice2"
    },
    {
        question:"6- Which of the following is NOT a valid way to declare a variable in JavaScript?",
        choice1:"var",
        choice2:"let",
        choice3:"const",
        choice4:"dim",
        correctAnswer:"choice4"
    },
];
const question_text=document.querySelector("h1");
const choice1 =document.querySelector("#choice1");
const choice2 =document.querySelector("#choice2");
const choice3 =document.querySelector("#choice3");
const choice4 =document.querySelector("#choice4");
const submit =document.querySelector("#submit");
const show =document.querySelector(".show");
let choices =document.querySelectorAll(".answer");
let choicesContainer=document.querySelector("ul");
let correct=undefined;
let counter=0;
let score=0;
nextQuestion(counter);
submit.addEventListener("click",function (){
    counter++;
    if(counter<quizData.length){
        nextQuestion(counter);
    }
    else if(counter==quizData.length){
        displayResult();
    }else{
        counter=0;
        score=0;
        nextQuestion(counter);
    }
})
function nextQuestion(counter){
    question_text.innerHTML=quizData[counter].question;
    choice1.innerHTML=quizData[counter].choice1;
    choice2.innerHTML=quizData[counter].choice2;
    choice3.innerHTML=quizData[counter].choice3;
    choice4.innerHTML=quizData[counter].choice4;
    correct=quizData[counter].correctAnswer;   
    show.style.display="none";
    submit.innerHTML="next question";
    choicesContainer.style.display="flex";
    submit.style.display="none";
    deselectChoices();
}
function dod(e){
    let selected=document.getElementById(e);
    if(e==correct){
       selected.style.backgroundColor="rgb(71, 211, 71)";
       score++;       
    }else{
        selected.style.backgroundColor="rgb(207, 48, 48)";
    }
    choices.forEach((button)=>{
        if(button.id==correct){
            button.style.backgroundColor="rgb(71, 211, 71)";
        }
        button.disabled=true;
    })
    submit.style.display="block";
}    

function displayResult(){
     question_text.innerHTML="You have finished the quiz !";
     submit.innerHTML="start again";
     show.innerHTML=` you scored ${score} out of ${quizData.length} !!! `; 
     show.style.display="block";
     choicesContainer.style.display="none";
}
function deselectChoices(){
    choices.forEach(choice => {
         choice.disabled=false;    
         choice.style.backgroundColor="beige";
        });
}