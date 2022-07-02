let playerScore = 0
let computerScore = 0
let tieScore = 0
const options = [ "paper" , "rock" , "scissors"];
const displayWinner = document.querySelector('.displayWinner');
const selectionDisplay = document.createElement('div');
const result = document.createElement('div');


const selectionButtons = document.querySelectorAll('.selection');
selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', e => {
        const playerSelection = selectionButton.id
        playRound(playerSelection)
    });
});


function computerPlay() {
    let random = Math.floor((Math.random() * options.length));
    let computerSelection = options[random];
    return computerSelection;
}

function playRound(playerSelection) {
    computerSelection = computerPlay();

        

    if (playerSelection === computerSelection) {
            result.textContent = "It's a tie!";
            ++tieScore;
    }

    if (
        (playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "rock" && computerSelection === "scissors")  
        ) { 
            result.textContent = "You win this round!";
            ++playerScore;    
     }
    if (
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock")
        ) { 
            result.textContent = 'The alien wins this round!';
            ++computerScore;
    }

    selectionDisplay.classList.add('selectionDisplay');
    selectionDisplay.textContent = `Player chose: ${playerSelection} Alien chose: ${computerSelection}`;
    result.classList.add('result');
    displayWinner.appendChild(result)
    displayWinner.appendChild(selectionDisplay);


    return

}

function game () {
    playRound();
    console.log ("---SCOREBOARD--- \n Player score: ", playerScore,
    "Computer score: ", computerScore, 
    "Tied games: ", tieScore,)
    return
}









