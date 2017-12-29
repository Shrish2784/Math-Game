var time = 60;
var score = 0;

function clicked(){
    var buttonText = document.getElementById("gameButton").textContent;
    if (buttonText == "Start Game"){
        document.getElementById("gameButton").textContent = "Reset Game";
        StartGame();
    } else if (buttonText == "Reset Game"){
        document.location.reload();
    }
}
function StartGame(){
    var timeRemaining = document.getElementById("timeRemaining");
    var currentScore = document.getElementById("currentScore");
    timeRemaining.innerHTML = time;
    currentScore.innerHTML = score;
    var counter = setInterval(function(){
        --time;
        timeRemaining.innerHTML = time;
        currentScore.innerHTML = score;
        if (time <= 00){
            clearInterval(counter);
            var gameOver = document.getElementById("gameOver");
            gameOver.style.display = "block";
            document.getElementById("displayScore").innerHTML += score;
        }
    } , 1000);
    UpdateGame();
}
function UpdateGame(){
    var num1 = (Math.floor(Math.random() * 6) + 4);
    var num2 = (Math.floor(Math.random() * 6) + 4);
    var number1 = document.getElementById("num1");
    var number2 = document.getElementById("num2");
    number1.innerHTML = num1;
    number2.innerHTML = num2;
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");
    var randomSelect = (Math.floor(Math.random() * 10 )) % 4;
    ans = num1 * num2;
    
    if (randomSelect == "0"){
        choice1.innerHTML = ans;
        choice2.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice3.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice4.innerHTML = Math.floor(Math.random() * 99) + 1;
    } else if (randomSelect == "1"){
        choice2.innerHTML = ans;
        choice1.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice3.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice4.innerHTML = Math.floor(Math.random() * 99) + 1;
    } else if (randomSelect == "2"){
        choice3.innerHTML = ans;
        choice2.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice1.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice4.innerHTML = Math.floor(Math.random() * 99) + 1;
    } else if (randomSelect == "3"){
        choice4.innerHTML = ans;
        choice2.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice3.innerHTML = Math.floor(Math.random() * 99) + 1;
        choice1.innerHTML = Math.floor(Math.random() * 99) + 1;
    }
}
function checkAnswer(value){
    var choice;

    if (value == 1){
        choice = document.getElementById("choice1");
        var userAnswer = choice.innerHTML;
    } else if (value == 2){
        choice = document.getElementById("choice2");
        var userAnswer = choice.innerHTML;
    } else if (value == 3){
        choice = document.getElementById("choice3");
        var userAnswer = choice.innerHTML;
    } else if (value == 4){
        choice = document.getElementById("choice4");
        var userAnswer = choice.innerHTML;
    }
    if (userAnswer == ans){
        score += 10;
    }
    UpdateGame();
}






