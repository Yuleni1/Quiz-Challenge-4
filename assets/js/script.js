// var pageContectEL = document.querySelector("#myDIV");
// var secondContentEl = document.querySelector("#myDIV");
document.getElementById("Start").addEventListener("click", function(){
   displayQuesitons();
    var time = 10;
   
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
var quiz= document.getElementById("quiz");
var answerEl = document.querySelector(".button-a");
var answerEl = document.querySelector(".button-b");
var answerEl = document.querySelector(".button-c");
var answerEl = document.querySelector(".button-d");
var questionEl= document.getElementById("question");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");

var currentQuiz = 0
var score = 0






function displayQuesitons (){
//hide start page

var currentQuizData = quizData[currentQuiz]

if(currentQuiz === quizData.length)
//return showScroe


questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d

}



var answerCheck = document.getElementById("answerCheck");

var checkAnswer = function (userPick){
    var correctAnswer= quizData[currentQuiz].correct

    if (correctAnswer === userPick){
        score++
        answerCheck.textContent="correct!";
    }
else{
    answerCheck.textContent="wrong!:".concat(correctAnswer);
}

currentQuiz++
displayQuesitons();
}

// function deselectAnswers(){
//     answerEls.forEach(answerEl => answerEl.checked = false)
// }

// function getSelected(){
//     var answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.clicked){
//             answer = answerEl.id
//         }
        
//     });

//     return answer
// }


// var selectButtons = document.querySelectorAll(".button");
// for (var i = 0; i < selectButtons.length; i++) {

//     selectButtons[i].addEventListener("click", function (){


    
       
//     })
// }   





// Have all button click




//  // have buttons click to the next question   

// function clickNext(){
    
//     console.log("you cliked")
// for (var i = 0; i < quizData.length; i++){

   
//    var nextQ=[questionEl.innerHTML=currentQuizData[i]+1,
//     a_text.textContent=quizData[i],
//     b_text.textContent=quizData[i],
//     c_text.textContent=quizData[i],
//     d_text.textContent=quizData[i]]
    
//     userSelections.push(nextQ);
// }
     
// }
    

// console.log(clickNext);

