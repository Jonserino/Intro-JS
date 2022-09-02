function getRandomInt(max) {
    return  Math.floor(Math.random() * max);
}


var correctNumber = getRandomInt;
console.log(getRandomInt(100));

var guesses = 10;
var button = document.querySelector("#buttonId");

var guessedNumber = document.getElementById("gNumber").value;
console.log(guessedNumber);


function checkNumber() {
console.log(guessedNumber.correctNumber)
if (guessedNumber == correctNumber) {
    document.getElementById("answers").innerHTML = "Congratulations! You were correct, you got it within " + guesses + " guesses!";
} else if (guessedNumber < correctNumber) {
    guesses--;
    document.getElementById("answers").innerHTML = "It's too low! " + guesses + " guesses left.";
} else {
    guesses--;
    document.getElementById("answers").innerHTML = "Too high! " + guesses + " guesses left.";
}
}

button.addEventListener("click", checkNumber);