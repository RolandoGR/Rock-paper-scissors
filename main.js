function playerSelection('selection') {
    let pSelection = prompt("Welcome. Please write 'rock' 'paper' or 'scissors' to play:",' ')
    return pSelection
}

function computerPlay() {
    let computerOptions = [ "Paper" , "Rock" , "Scissors"]
    let random = Math.floor((Math.random() * computerOptions.length));
    let computerSelection = computerOptions[random];
    return computerSelection
}

computerPlay()
console.log(computerSelection)
console.log("Hello")
