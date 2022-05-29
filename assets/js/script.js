var time = 5;
// var pageContectEL = document.querySelector("#myDIV");
// var secondContentEl = document.querySelector("#myDIV");
document.getElementById("Start").addEventListener("click", function(){
   displayQuesitons();
   
   
    var countTime = setInterval(function(){
        document.getElementById("time").innerHTML=time
    
        time--;
        if (time === 0) {
            stopInterval()
            end()
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

var currentQuiz = 0
var score = 0

main.style.display="block";
quiz.style.display="none";
quizEnd.style.display="none";



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


save ();
}



var answerCheck = document.getElementById("answerCheck");

var checkAnswer = function (userPick){
    var correctAnswer= quizData[currentQuiz].correct

    if (correctAnswer === userPick){
        score++
        answerCheck.textContent="correct!";
        console.log(score);
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
function end (){

    quiz.style.display="none";
    quizEnd.style.display="block";
    displayScore ()
    createInitails ()
}

function save (){
localStorage.setItem("score", JSON.stringify(score));

};

function displayScore (){
    var savedScore = localStorage.getItem("score");
    finalScore.textContent = "this is your final score!" + score;

    if(!savedScore) {
        return false;
    }

    
}

function createInitails (){
    //var saveCreatedInitials = document.getElementById("initials");
    var userInitials = document.createElement("input")
    userInitials.setAttribute("id", "initails-input"); 
    userInitials.setAttribute("type", "text"); 
    userInitials.setAttribute("name", "iniatials"); 
    userInitials.setAttribute("placeholder", "Enter Initials here"); 
    finalInitialsEl.appendChild(userInitials);

    //save button 

    saveButtonEl = document.createElement("button");

    saveButtonEl.setAttribute("id" , "save-btn");
    saveButtonEl.setAttribute("class" ,"save-btn");
    saveButtonEl.setAttribute("type" , "submit");
    saveButtonEl.textContent = "Save Score";

    console.log(createInitails());
}
// function saveInitials (){
//     localStorage.setItem("initials", JSON.stringify(initials));
// }

// function  savedInitials (){
//     localStorage.getItem("initials");
//     savedInitials
// }


