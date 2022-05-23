// Create CCS

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
    var firstQuestion= document.getElementById("myDIV")
    if (firstQuestion.style.display === "block") {
        firstQuestion.style.display = "none";}
        else {
            firstQuestion.style.display = "block";
        }

        console.log(firstQuestion);
    }




