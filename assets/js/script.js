var time = 75;
// var pageContectEL = document.querySelector("#myDIV");
// var secondContentEl = document.querySelector("#myDIV");
document.getElementById("Start").addEventListener("click", function(){
   displayQuesitons();
   
   
    var countTime = setInterval(function(){
        document.getElementById("time").innerHTML=time
    
        time--;
        if (time === 0) {
            stopInterval()
        }
    },1000);
    
    var stopInterval = function(){

        console.log('time is up');
        clearInterval(countTime);
    
    }
    });

function hideFirstPage () {
    var firstPage = document.getElementById("firstDiv");
    if (firstPage.style.visibility === "hidden"){
    firstQuestion.style.display = "block";}
    else{
        firstPage.style.visibility = "hidden";
    }
};


function hideQuestion () {
    var firstQuestion= document.getElementById("myDIV");
    if (firstQuestion.style.display === "block") {
        firstQuestion.style.display = "none";}
        else {
            firstQuestion.style.display = "block";
        }

        //console.log(firstQuestion);
    };

    


var quizData = [

{
    question: "Commonly used data types DO Not Include",
        a:"1. stings",
        b:"2. booleans",
        c:"3. alerts",
        d:"4. numbers",
        correct:"C" //UPDATE TO CORRECT ANSWER
},
{   question: "The condition in an if / else statement is enclosed with _________.",
        a:"1. quotes",
        b:"2. curly brackets",
        c:"3. parenthesis",
        d:"4. square brackers",
        correct:"C"
},
{   question: "String values must be enclosed within _________ when being assigned to variables.",
        a:"1. commas",
        b:"2. curly brackets",
        c:"3. quotes",
        d:"4. parenthesis",
        correct:"C"

},

{   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a:"1. JavaScript",
        b:"2. terminal/bash",
        c:"3. for loops",
        d:"4. console.log",
        correct:"C"

}

];        

// create a variable for my start page
var main= document.getElementById("firstDiv");
var quiz=document.getElementById("quiz");
var questionEl= document.querySelector(".questions");
console.log(questionEl);
var answerEl = document.querySelector(".button-a");
var answerEl = document.querySelector(".button-b");
var answerEl = document.querySelector(".button-c");
var answerEl = document.querySelector(".button-d");

var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");

var currentQuiz = 0
var score = 0


main.style.display="block";
quiz.style.display="none";



function displayQuesitons (){
quiz.style.display="block";

var currentQuizData = quizData[currentQuiz];

if(currentQuiz === quizData.length){}
//return showScroe


questionEl.textContent = currentQuizData.question
a_text.textContent = currentQuizData.a
b_text.textContent = currentQuizData.b
c_text.textContent = currentQuizData.c
d_text.textContent = currentQuizData.d

}



var answerCheck = document.getElementById("answerCheck");

var checkAnswer = function (userPick){
    var correctAnswer= quizData[currentQuiz].correct

    if (correctAnswer === userPick){
        score++
        answerCheck.textContent="correct!";
    }
else{
    time = time - 10;
    console.log(time);
    answerCheck.textContent="wrong!:".concat(correctAnswer);
}

currentQuiz++
displayQuesitons();
}

//function for timer reaches 0








