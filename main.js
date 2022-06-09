let playerScore = 0
let computerScore = 0

function playerPlay() {
    let playerSelection = prompt("Welcome. Please write 'rock' 'paper' or 'scissors' to play:").toLowerCase()
    return playerSelection
}

function computerPlay() {
    let computerOptions = [ "paper" , "rock" , "scissors"]
    let random = Math.floor((Math.random() * computerOptions.length));
    let computerSelection = computerOptions[random];
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay()
    computerSelection = computerPlay()
    console.log (playerSelection)
    console.log (computerSelection)
    if (playerSelection === computerSelection) {
        return 
    }

    if (
        (playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "rock" && computerSelection === "scissors")  
        ) { 
        return ++playerScore    
     }
    if (
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock")
        ) { 
        return ++computerScore 
    }

    return

}


game()
