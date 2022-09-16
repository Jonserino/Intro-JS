function getRandomInt(max) {
    return  Math.floor(Math.random() * max + 1);
}


var correctNumber = getRandomInt(100);
console.log("Correct number: " + correctNumber);

var guesses = 10;

var button = document.querySelector("#buttonID");
var input = document.querySelector("#inputID");
var reset = document.querySelector("#restartID");
var max_time = 30
var time_left = max_time;
var timer_EL = document.querySelector("#timerID");

function checkAttempts(){
    if (guesses <= 0) {
        document.getElementById("output").innerHTML="You ran out of attempts :< ! Restart to play again :> ! The number was: " + correctNumber;
        console.log("Guesses left: " + guesses);
        console.log("Player lost")
        playing = false;
        if (time_left >= 0) {
            
            document.getElementById("output").innerHTML="You rna out of time! Please restart, the number was: " + correctNumber;
            console.log("Player ran out of time");
            console.log("Player lost");
        }
    } else {
        console.log("Guesses left: " + guesses);
        playing = true;
    }
}

function restart() {
    correctNumber = getRandomInt(100);
    guesses = 10;
    document.getElementById("output").innerHTML="";
    input.value = "";
    playing = true;
}

function checkNumber(){
    if (playing == true) {
        console.log("Player input: " + input.value)
        console.log("Correct number: " + correctNumber)
        if (input.value == correctNumber) {
            document.getElementById("output").innerHTML="Congratulations! You were able to guess the correct number with " + guesses + " attempt(s) remaining! Restart and try again :>";
            console.log("Player won")
            playing = false;
        } else {
            if (input.value > correctNumber) {
                guesses--;
                document.getElementById("output").innerHTML="Too high! " + guesses + " Guesses left.";
                checkAttempts();
            } else {
                guesses--;
                document.getElementById("output").innerHTML="Too low! " + guesses + " Guesses left.";
                checkAttempts();
            }
        }
    }
}

timer_EL.innerHTML = "Time left: " + time_left;

reset.addEventListener("click", restart);
button.addEventListener("click", checkNumber);

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkNumber()
    }
    if (event.key === 'r') {
        restart()
    }
});

var timer = setInterval(myTimer, 1000); // kjører funksjonen myTimer 1 gang i sekundet

function myTimer(){ 
    if (playing = true){
        time_left--; // reduserer time_left var med 1
        timer_EL.innerHTML = "Time left: " + time_left; // setter tallet i time_left inn i HTML tag, timer_EL
    }
}