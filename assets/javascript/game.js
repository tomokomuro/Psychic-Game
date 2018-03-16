
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 9;
var guessedAlphabets [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function handleUserGuess () {

var guessesLeft = function () {
    "Guesses Left " + guessesLeft
}
document.onkeyup = function(event) {
    var userGuess = event.key
}
if (userGuess) === (computerGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    
}
else {userGuess} !== (computerGuess) {
    losses++;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

guessedAlphabets.push(guessedAlphabets);

}

var guessesleft
var guessedalphabets

// var html = 
// "<Guess what letter I'm thinking of"
// "<p> Your guesses so far: " + guessedalphabets + "</p>" +
// "<p>Wins: " + Wins + "</p> " +
// "<p>losses: " + Losses + "</p>" + 
// "<p>ties: " + Ties + "</p>" + 
