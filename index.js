const choices = ["rock", "paper", "scissors"]

//computer choices


function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}


//getting the input of each player

function getWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    } else if ( (playerSelection == "rock" && computerSelection == "scissors")
    
|| (playerSelection == "scissors" && computerSelection == "paper") ||
(playerSelection == "paper" && computerSelection == "rock")){
    return "player";
} else {
    return "computer";
}
}


//getting the winner from the game

function getResults (playerSelection, computerSelection){
    const winner = getWinner(playerSelection, computerSelection);
    if (winner == "Tie"){
        return "It is a draw";
    }
    else if (winner == "player"){
        return "you win!";
    } else {
        return "computer wins";
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(getResults(playerSelection, computerSelection));
