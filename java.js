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
            return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection;
        } else {
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay;
        }
    }

    if (playerSelection === 'paper') {
        if (computerPlay === 'scissors') {
            return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection;
        } else {
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerPlay === 'rock') {
            return 'Computer won!' + ' ' + computerPlay + ' ' + 'beats' + ' ' + playerSelection;
        } else {
            return 'You won!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerPlay;
        }
    }
};



