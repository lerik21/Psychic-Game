var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var wins = 0

var losses = 0

var guessesLeft = 9


document.onkeyup = function(event) {
    var yourGuessText = document.getElementById("yourGuess");

    var userGuess = event.key;

    yourGuessText.append(userGuess+" ");

    console.log(userGuess);

    var guessesLeftText = document.getElementById("guessesLeft");

    guessesLeftText.textContent=guessesLeft;

    var winsText = document.getElementById("wins");

    winsText.textContent=wins;


    var lossesText = document.getElementById("losses");

    lossesText.textContent=losses;



    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


   
        if(userGuess===computerChoices) {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            wins++;
            guessesLeft=9;

            var clear = document.getElementById("yourGuess");
        }
        else if(GuessesLeft.textContent<="0") {
            losses++;

        }

    else if(userGuess!==computerChoices) {
        guessesLeft--;
    }
    


    yourGuessText.textContent =  userGuess;
    guessesLeftText.textContent = 9;
    winsText.textContent = 0;
    lossesText.textContent = 0;
    




    



}

