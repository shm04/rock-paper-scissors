function playerSelection(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error, please type a correct input.'
    }
};

function computerPlay(computerPlay) {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }   
};


function playRound (computerPlay, playerSelection) {
    if (computerPlay == playerSelection) {
        return 'Tie game!' + ' ' + computerPlay + ' ' + 'is the same as' + ' ' + playerSelection;
    } 
    
    if (playerSelection === 'rock') {
        if (computerPlay === 'paper') {
            computerScore++;
            return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection; 
        } else {
            playerScore++;
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay;
        }
    }

    if (playerSelection === 'paper') {
        if (computerPlay === 'scissors') {
            computerScore++;
            return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection;
        } else {
            playerScore++;
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay
        }
    }

    if (playerSelection === 'scissors') {
        if (computerPlay === 'rock') {
           computerScore++; 
           return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection;
        } else {
            playerScore++;
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay;
        }
    }
};



let playerScore =  0;
let computerScore = 0;

function score() {
    return 'Player score is' + ' ' + playerScore + ' ' + 'and computer score is' + ' ' + computerScore;
            
};

function game() {
    if (playerScore == 5) {
        alert ('Congratulations. You win the game!');
    }
    if (computerScore == 5) {
        alert ('Computer wins. Good luck next time!');
    } else { return 'Game in progress...'}
};

console.log(playRound(computerPlay(),'rock'));
console.log(score());
console.log(game());


    

