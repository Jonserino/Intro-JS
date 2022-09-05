function getRandomInt(max) {
    return  Math.floor(Math.random() * max + 1);
}


var correctNumber = getRandomInt(100);

var guesses = 10;

var button = document.querySelector("#buttonId");
var input = document.querySelector("#inputID");
var reset = document.querySelector("#restartID");


function checkNumber(){
    console.log(input.value)
    console.log(correctNumber)
    if (input.value == correctNumber) {
        document.getElementById("output").innerHTML="Congratulations! You were able to guess the correct number with " + guesses + " attempt(s) remaining!";
    } else {
        if (input.value > correctNumber) {
            guesses--;
            document.getElementById("output").innerHTML="Too high! " + guesses + " Guesses left.";
        } else {
            guesses--;
            document.getElementById("output").innerHTML="Too low! " + guesses + " Guesses left.";
        }
    }
    if (guesses <= 0) {
        document.getElementById("output").innerHTML="You ran out of attempts! :<";
    }
}

function restart() {
    correctNumber = getRandomInt(100)
}

reset.addEventListener("click", restart);

button.addEventListener("click", checkNumber);