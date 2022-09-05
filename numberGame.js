function getRandomInt(max) {
    return  Math.floor(Math.random() * max);
}


var correctNumber = getRandomInt(100);

var guesses = 10;
var button = document.querySelector("#buttonId");

var input = document.querySelector("#inputID");


function checkNumber(){
    console.log(input.value)
    console.log(correctNumber)
    if (input.value == correctNumber) {
        document.getElementById("output").innerHTML="Congratulations!";
        
    } else {
        if (input.value > correctNumber) {
            guesses--;
            document.getElementById("output").innerHTML="Too high! " + guesses + " guesses left.";
        } else {
            guesses--;
            document.getElementById("output").innerHTML="Too low! " + guesses + " guesses left.";
        }
    }
}

button.addEventListener("click", checkNumber);