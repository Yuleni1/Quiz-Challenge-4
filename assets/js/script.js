var pageContectEL = document.querySelector("#myDIV");
var secondContentEl = document.querySelector("#myDIV");
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
        firstQuestionPage ();

    }
    });
    
    
    // hides first page on click
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
    
    function wrongAnswer() {
        var wrongAnswerQuestion1 = document.getElementById("wrongAnswer");
        if (wrongAnswerQuestion1.style.display === "block"){
            wrongAnswerQuestion1.style.display = "none";}
    
            else {
                wrongAnswerQuestion1.style.display = "block";}
    //console.log(wrongAnswerQuestion1);
            };
    
    function correctAnswer() {
        var correctAnswerQuestion1 = document.getElementById("correctAnswer");
        if (correctAnswerQuestion1.style.display === "block"){
            correctAnswerQuestion1.style.display = "none";}
    
            else {
                correctAnswerQuestion1.style.display = "block";}
    //console.log(correctAnswerQuestion1);
            };

var myQuestions = {
    
    question1:{
        title1: "Commonly used data types DO Not Include",
        choice1:"1. stings",
        choice2:"2. booleans",
        choice3:"3. alerts",
        choice4:"4. numbers",
        correctChoice:"3. alerts" 
    },
    question2:{
        title2: "The condition in an if / else statement is enclosed with _________.",
        choice1:"1. quotes",
        choice2:"2. curly brackets",
        choice3:"3. parenthesis",
        choice4:"4. square brackers",
        correctChoice:"2. curly brackets" 
    },
    question3:{
        title3: "String values must be enclosed within _________ when being assigned to variables.",
        choice1:"1. commas",
        choice2:"2. curly brackets",
        choice3:"3. quotes",
        choice4:"4. parenthesis",
        correctChoice:"2. quotes"

    },

    question4:{
        title4: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1:"1. JavaScript",
        choice2:"2. terminal/bash",
        choice3:"3. for loops",
        choice4:"4. console.log",
        correctChoice:"4. console.log"

    }

};        




function firstQuestionPage (){
    

    var firstQuestionEl = document.getElementById("question");
    firstQuestionEl.textContent = myQuestions.question1.title1;

    console.log(firstQuestionEl);

    var firstQuestionAnswerEL = document.getElementById("choice1");
    firstQuestionAnswerEL.textContent = myQuestions.question1.choice1;

    var firstQuestionAnswerEL = document.getElementById("choice2");
    firstQuestionAnswerEL.textContent = myQuestions.question1.choice2;

    var firstQuestionAnswerEL = document.getElementById("choice3");
    firstQuestionAnswerEL.textContent = myQuestions.question1.choice3;

    var firstQuestionAnswerEL = document.getElementById("choice4");
    firstQuestionAnswerEL.textContent = myQuestions.question1.choice4;

};

firstQuestionPage(myQuestions);

pageContectEL.addEventListener("click",function(){
 
    var moveToNext = document.getElementById("myDIV");
    moveToNext.style.display = "none";

    function secondQuestionPage(){
        var questionEl = document.getElementById("question");
        questionEl.textContent = myQuestions.question2.title2;
        console.log(questionEl);

        var answerEl = document.getElementById("choice1");
        answerEl.textContent = myQuestions.question2.choice1;
    
        var answerEl = document.getElementById("choice2");
        answerEl.textContent = myQuestions.question2.choice2;
    
        var answerEl = document.getElementById("choice3");
        answerEl.textContent = myQuestions.question2.choice3;
    
        var answerEl = document.getElementById("choice4");
        answerEl.textContent = myQuestions.question2.choice4;
    
    }

    if (moveToNext.style.display = "none"){
        moveToNext.style.display = "block";
    }
    secondQuestionPage(myQuestions);



pageContectEL.addEventListener("click",function(){ 
    var moveToNext = document.getElementById("myDIV");
    moveToNext.style.display = "none";

    function thirdQuestionPage(){
        var thirdQuestionEl = document.getElementById("question");
        thirdQuestionEl.textContent = myQuestions.question3.title3;
        console.log(thirdQuestionEl);

        var thirdAnswerEl = document.getElementById("choice1");
        thirdAnswerEl.textContent = myQuestions.question3.choice1;
    
        var thirdAnswerEl = document.getElementById("choice2");
        thirdAnswerEl.textContent = myQuestions.question3.choice2;
    
        var thirdAnswerEl = document.getElementById("choice3");
        thirdAnswerEl.textContent = myQuestions.question3.choice3;
    
        var thirdAnswerEl = document.getElementById("choice4");
        thirdAnswerEl.textContent = myQuestions.question3.choice4;
    
    }

    
    if (moveToNext.style.display = "none"){
        moveToNext.style.display = "block";
    }
    thirdQuestionPage(myQuestions);
    console.log(thirdQuestionPage);


     


pageContectEL.addEventListener("click",function(){ 
    var moveToNext = document.getElementById("myDIV");
    moveToNext.style.display = "none";

    function forthQuestionPage(){
        var forthQuestionEl = document.getElementById("question");
        forthQuestionEl.textContent = myQuestions.question4.title4;
        console.log(forthQuestionEl);

        var forthAnswerEl = document.getElementById("choice1");
        forthAnswerEl.textContent = myQuestions.question4.choice1;
    
        var forthAnswerEl = document.getElementById("choice2");
        forthAnswerEl.textContent = myQuestions.question4.choice2;
    
        var forthAnswerEl = document.getElementById("choice3");
        forthAnswerEl.textContent = myQuestions.question4.choice3;
    
        var forthAnswerEl = document.getElementById("choice4");
        forthAnswerEl.textContent = myQuestions.question4.choice4;
    
    }

    
    if (moveToNext.style.display = "none"){
        moveToNext.style.display = "block";
    }
    forthQuestionPage(myQuestions);
    console.log(forthQuestionPage);
    });
});
});
