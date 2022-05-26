
document.getElementById("Start").addEventListener("click", function(){
    var time = 75;
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
    
    
    // hides first page on click
    function hideFirstPage () {
        var firstPage = document.getElementById("firstDiv");
        if (firstPage.style.visibility === "hidden"){
        firstQuestion.style.display = "block";}
        else{
            firstPage.style.visibility = "hidden";
        }
    }
    
    
    function hideQuestion () {
        var firstQuestion= document.getElementById("myDIV");
        if (firstQuestion.style.display === "block") {
            firstQuestion.style.display = "none";}
            else {
                firstQuestion.style.display = "block";
            }
    
            //console.log(firstQuestion);
        }
    
    function wrongAnswer() {
        var wrongAnswerQuestion1 = document.getElementById("wrongAnswer");
        if (wrongAnswerQuestion1.style.display === "block"){
            wrongAnswerQuestion1.style.display = "none";}
    
            else {
                wrongAnswerQuestion1.style.display = "block";}
    //console.log(wrongAnswerQuestion1);
            }
    
    function correctAnswer() {
        var correctAnswerQuestion1 = document.getElementById("correctAnswer");
        if (correctAnswerQuestion1.style.display === "block"){
            correctAnswerQuestion1.style.display = "none";}
    
            else {
                correctAnswerQuestion1.style.display = "block";}
    //console.log(correctAnswerQuestion1);
            }
    
var myQuestions = {
    
    question1:{
        title1: "Commonly used data types DO Not Include",
        choice1:"1. stings",
        choice2:"2. booleans",
        choice3:"3. alerts",
        choice4:"4. numbers",
        correctChoice:"3. alerts" 
    }
    

}         



function firstQuestionPage (q){
    var containerEL = document.getElementById("myDiv");
    console.log(containerEL);

    var firstQuestion = document.getElementById("question");
    firstQuestion.textContent = myQuestions.question1.title1;

    console.log(firstQuestion);

    var firstQuestionAnswer = document.getElementById("choice1");
    firstQuestionAnswer.textContent = myQuestions.question1.choice1;

    var firstQuestionAnswer = document.getElementById("choice2");
    firstQuestionAnswer.textContent = myQuestions.question1.choice2;

    var firstQuestionAnswer = document.getElementById("choice3");
    firstQuestionAnswer.textContent = myQuestions.question1.choice3;

    var firstQuestionAnswer = document.getElementById("choice4");
    firstQuestionAnswer.textContent = myQuestions.question1.choice4;
    
};

firstQuestionPage(myQuestions);




 
 