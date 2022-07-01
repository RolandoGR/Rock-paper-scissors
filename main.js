let playerScore = 0
let computerScore = 0
let tieScore = 0

const selectionButtons = document.querySelectorAll('.selection');

selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.id 
        makeSelection(selectionName)
    });
});

function makeSelection(s) {
    console.log(s)
}

function computerPlay() {
    let random = Math.floor((Math.random() * options.length));
    let computerSelection = options[random];
    return computerSelection;
}

function playRound() {
    playerSelection = makeSelection()
    computerSelection = computerPlay()
    console.log("Player chose: " , playerSelection, "Computer chose: " , computerSelection)
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
    playRound();
    console.log ("---Final scoreboard--- \n Player score: ", playerScore,
    "Computer score: ", computerScore, 
    "Tied games: ", tieScore,)
    return
}

game();






