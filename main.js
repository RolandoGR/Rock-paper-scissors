let playerScore = 0
let computerScore = 0
let tieScore = 0
let gamesPlayed = 0
let options = [ "paper" , "rock" , "scissors"];


function playerPlay() {
    let playerSelection = prompt("Welcome. Please write 'rock' 'paper' or 'scissors' to play:").toLowerCase()
    if (options.indexOf(playerSelection) === -1) {
        console.log(options.indexOf(playerSelection))
        --gamesPlayed 
        playerPlay();
    }
    return playerSelection;
}

function computerPlay() {
    let random = Math.floor((Math.random() * options.length));
    let computerSelection = options[random];
    return computerSelection;
}

function playRound() {
    playerSelection = playerPlay()
    computerSelection = computerPlay()
    console.log("Player chose: " , playerSelection, "Computer chose: " , computerSelection)
    ++gamesPlayed;
    if (playerSelection === computerSelection) {
        console.log ("It's a tie!");
        return ++tieScore;
    }

    if (
        (playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "rock" && computerSelection === "scissors")  
        ) { 
        console.log ("Player Wins");
        return ++playerScore;    
     }
    if (
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock")
        ) { 
            console.log ("Computer Wins");
        return ++computerScore;
    }

    return

}

function game () {
    for (gamesPlayed = 0; gamesPlayed <= 4;) {
        playRound()
    }
    while (computerScore === playerScore) {
        console.log ("SUDDEN DEATH!");
        playRound();

    }
    console.log ("---Final scoreboard--- \n Player score: ", playerScore,
    "Computer score: ", computerScore, 
    "Tied games: ", tieScore, 
    "Total games played: ", gamesPlayed)
    return
}

game();






