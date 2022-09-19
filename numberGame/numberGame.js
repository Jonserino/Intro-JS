function getRandomInt(max) {
    return  Math.floor(Math.random() * max + 1);
}

playing = true;

var correctNumber = getRandomInt(100);
console.log("Correct number: " + correctNumber);

var guesses = 10;

var button = document.querySelector("#buttonID");
var input = document.querySelector("#inputID");
var reset = document.querySelector("#restartID");
var max_time = 30
var time_left = max_time;
var timer_EL = document.querySelector("#timer");

var timer = setInterval(myTimer, 1000); // kjører funksjonen myTimer 1 gang i sekundet

function myTimer(){
    if (playing == true) {
        if (time_left > 0){
            time_left--; // reduserer time_left var med 1
            timer_EL.innerHTML = "Time left: " + time_left; // setter tallet i time_left inn i HTML tag, timer_EL
            playing = true;
        } else {
            console.log("Player ran out of time.")
            console.log("Player lost.")
            document.getElementById("output").innerHTML="You ran out of time. :< Please try again! The number was: " + correctNumber;
            playing = false;
        }
    }
}

function checkAttempts(){
    if (guesses <= 0) {
        document.getElementById("output").innerHTML="You ran out of attempts :< ! Restart to play again :> ! The number was: " + correctNumber;
        console.log("Guesses left: " + guesses);
        console.log("Player lost")
        playing = false;
    } else {
        playing = true;  
    }
}

function guessing(x) {
    if (guesses == 1) {
        document.getElementById("output").innerHTML= x + guesses + " Guess left.";  
    } else {
        document.getElementById("output").innerHTML= x + guesses + " Guesses left.";
    }
}

function restart() {
    correctNumber = getRandomInt(100);
    console.log(correctNumber)
    guesses = 10;
    document.getElementById("output").innerHTML="";
    input.value = "";
    playing = true;
}

function checkNumber(){
    if (playing == true) {
        console.log("Guesses left: " + guesses);
        console.log("Player input: " + input.value)
        console.log("Correct number: " + correctNumber)
        if (input.value == correctNumber) {
            if (guesses == 1) {
                guesses + 2;
                document.getElementById("output").innerHTML="Congratulations! You were able to guess the correct number with " + guesses + " attempt remaining! Restart and try again :>";
                console.log("Player won")
                playing = false;    
            } else {
                document.getElementById("output").innerHTML="Congratulations! You were able to guess the correct number with " + guesses + " attempts remaining! Restart and try again :>";
                console.log("Player won")
                playing = false;    
            }
        } else {
            if (input.value > correctNumber) {
                guessing("Too high ");            
                checkAttempts();
            } else {
                guessing("Too low ");
                checkAttempts(); 
            }
        }
        guesses--;
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

