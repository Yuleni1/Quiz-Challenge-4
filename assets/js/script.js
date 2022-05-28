// var pageContectEL = document.querySelector("#myDIV");
// var secondContentEl = document.querySelector("#myDIV");
document.getElementById("Start").addEventListener("click", function(){
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
        correct:"3. alerts" 
},
{   question: "The condition in an if / else statement is enclosed with _________.",
        a:"1. quotes",
        b:"2. curly brackets",
        c:"3. parenthesis",
        d:"4. square brackers",
        correct:"2. curly brackets" 
},
{   question: "String values must be enclosed within _________ when being assigned to variables.",
        a:"1. commas",
        b:"2. curly brackets",
        c:"3. quotes",
        d:"4. parenthesis",
        correct:"2. quotes"

},

{   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a:"1. JavaScript",
        b:"2. terminal/bash",
        c:"3. for loops",
        d:"4. console.log",
        correct:"4. console.log"

}

];        


var quiz= document.getElementById("quiz");
var answerEls = document.querySelectorAll(".button");
var questionEl= document.getElementById("question");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");
var submitButton = document.getElementById("submit");

var currentQuiz = 0
var score = 0
var task = [];
var currentQuizData = quizData[currentQuiz]


generateQuiz()
//The quiz dynamically displayed
function generateQuiz() {
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

   
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    var answer
    answerEls.forEach(answerEl => {
        if(answerEl.clicked){
            answer = answerEl.id
        }
        
    });

    return answer
}


var selectButtons = document.querySelectorAll(".button");
for (var i = 0; i < selectButtons.length; i++) {

    selectButtons[i].addEventListener("click", function (){


        console.log("you clicked");
        const answer = getSelected()
        if (answer){
            if (answer === quizData[currentQuiz].correct){
                score++
            }

            currentQuiz++

            if(currentQuiz < quizData.length){
                generateQuiz()

            }
            else{
                quiz.innerHTML ="<h2>You answered</h2>";
                
                "<button onclick='location.reload()'>Reload</button>"
            } 
       }
    })
}   





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

