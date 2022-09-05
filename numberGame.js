function getRandomInt(max) {
    return  Math.floor(Math.random() * max + 1);
}


var correctNumber = getRandomInt(100);

var guesses = 10;
var button = document.querySelector("#buttonId");

var input = document.querySelector("#inputID");


function checkNumber(){
    console.log(input.value)
    console.log(correctNumber)
    if (input.value == correctNumber) {
        document.getElementById("output").innerHTML="Congratulations! You were able to guess the correct number with " + guesses + " attempts remaining!";
        
    } else {
        if (input.value > correctNumber) {
            guesses--;
            document.getElementById("output").innerHTML="Too high! " + guesses + " Guesses left.";
        } else {
            guesses--;
            document.getElementById("output").innerHTML="Too low! " + guesses + " Guesses left.";
        }
    }
}

button.addEventListener("click", checkNumber);