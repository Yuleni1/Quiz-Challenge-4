var time = 35;
var countTime= document.getElementById("time");
var stopInterval = function(){
clearInterval(countTime);     
}
//time intercal
document.getElementById("Start").addEventListener("click", function(){
   displayQuesitons();
   
 
    countTime = setInterval(function(){
        document.getElementById("time").innerHTML=time
    
        time--;
        if (time <= 0) {
            console.log(time);
            stopInterval()
            end()
        }
    },1000);
    
   
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

    };

    

//quiz array
var quizData = [

{
    question: "Commonly used data types DO Not Include",
        a:"1. strings",
        b:"2. booleans",
        c:"3. tags",
        d:"4. numbers",
        correct:"C" 
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
        correct:"D"

}

];        

//list of html element connections
var quizEnd=document.getElementById("end");
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
var finalScore = document.getElementById("score");
var finalInitialsEl = document.getElementById("initials");

//setting user quiz and scor at 0
var currentQuiz = 0
var score = 0


//setting default styles
main.style.display="block";
quiz.style.display="none";
quizEnd.style.display="none";


//function to display the questions
function displayQuesitons (){
quiz.style.display="block";

//createing a variable that connect quizdata and user quiz
var currentQuizData = quizData[currentQuiz];


//checking that if the current quiz matches the quiz data endez to go to check user function. 
if(currentQuiz === quizData.length){
    checkUserQuestion()
}

//connecting the array to the html elements
questionEl.textContent = currentQuizData.question
a_text.textContent = currentQuizData.a
b_text.textContent = currentQuizData.b
c_text.textContent = currentQuizData.c
d_text.textContent = currentQuizData.d

//saving score
save ();

}

//function to move to last page
var checkUserQuestion = function(){
    clearInterval(countTime);
       quiz.style.display="none";
        quizEnd.style.display="block";
        countTime.style.display="none"
    
}


//function to check the user answer input
var answerCheck = document.getElementById("answerCheck");

var checkAnswer = function (userPick){
    var correctAnswer= quizData[currentQuiz].correct

    //if answer is correct to add 1
    if (correctAnswer === userPick){
        score++
        answerCheck.textContent="Correct! 😀";
        // console.log(score);
    }
else{
    //if answer is incorrect then subtract 10
    time = time - 10;
    answerCheck.textContent="Wrong!😬:".concat(correctAnswer);
}

//adding 1 to the current quiz to move the user to the next question. 
currentQuiz++

//reapplying the displayQuestion function 
displayQuesitons();

}




//saving the score 
function save (){
localStorage.setItem("score", JSON.stringify(score));

};
//displaying the score
function displayScore (){
    clearInterval(countTime);
    var savedScore = localStorage.getItem("score");
    finalScore.textContent = "this is your final score!  " + score;

    if(!savedScore) {
        return false;
    }

    
}

//submitting user initials

function submit(){
    var initials =  document.getElementById("initials").value;
    var allInitials=[];
allInitials = JSON.parse(localStorage.getItem("allInitials")) || [];
allInitials.push("INITIALS:  " + initials + "  YOUR SCORE IS : " + score);
localStorage.setItem("allInitials", JSON.stringify(allInitials));
document.getElementById("initials").value = "";
document.getElementById("initialList").innerHTML = localStorage.getItem("allInitials")
  

}



//function for timer reaches 0
function end (){
    clearInterval(countTime);
    quiz.style.display="none";
    quizEnd.style.display="block";
    countTime.style.display="none";
    allInitials.style.display="none";
    displayScore ()
    
}

