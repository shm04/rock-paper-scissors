const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerPick = document.getElementById('player-pick');
const compuPick = document.getElementById('computer-pick');
const resultDiv = document.querySelector('.result-div')
const youWin = document.getElementById('you-win');
const youTie = document.getElementById('you-tie');
const compuWins = document.getElementById('compu-wins');
const playerScore = document.getElementById('player-score');
const compuScore = document.getElementById('compu-score');
const restartBtn = document.getElementById('restart-btn');

let computerPick = '';

const autoPick = () => {
    let number = Math.floor(Math.random() * 3);

    if (number == 0){
        computerPick = 'ROCK';
    } else if (number == 1){
        computerPick = 'PAPER';
    } else {
        computerPick = 'SCISSORS';
    }

    return computerPick;
}

let userPick = '';

rock.addEventListener('click', () => {
    userPick = 'ROCK';
    playerPick.textContent = `${userPick}`;
    autoPick();
    compuPick.textContent = `${computerPick}`;
    rockResult();
})

paper.addEventListener('click', () => {
    userPick = 'PAPER';
    playerPick.textContent = `${userPick}`
    autoPick();
    compuPick.textContent = `${computerPick}`;
    paperResult();
})

scissors.addEventListener('click', () => {
    userPick = 'SCISSORS';
    playerPick.textContent = `${userPick}`;
    autoPick();
    compuPick.textContent = `${computerPick}`;
    scissorsResult();
})

let userScore = 0;
let computerScore = 0;

const rockResult = () => {
    if (userPick == 'ROCK' && computerPick == 'ROCK'){
        youTie.style.display = 'flex';
        youWin.style.display = 'none';
        compuWins.style.display = 'none';
    } else if (userPick == 'ROCK' && computerPick == 'PAPER'){
        youTie.style.display = 'none';
        youWin.style.display = 'none';
        compuWins.style.display = 'flex';
        computerScore++;
        compuScore.textContent = `Computer´s score: ${computerScore}`;
    } else if (userPick == 'ROCK' && computerPick == 'SCISSORS'){
        youTie.style.display = 'none';
        compuWins.style.display = 'none';
        youWin.style.display = 'flex';
        userScore++;
        playerScore.textContent = `Your score: ${userScore}`;
    }
}

const paperResult = () => {
    if (userPick == 'PAPER' && computerPick == 'PAPER'){
        youTie.style.display = 'flex';
        youWin.style.display = 'none';
        compuWins.style.display = 'none';
    } else if (userPick == 'PAPER' && computerPick == 'SCISSORS'){
        youTie.style.display = 'none';
        youWin.style.display = 'none';
        compuWins.style.display = 'flex';
        computerScore++;
        compuScore.textContent = `Computer´s score: ${computerScore}`;
    } else if (userPick == 'PAPER' && computerPick == 'ROCK'){
        youTie.style.display = 'none';
        compuWins.style.display = 'none';
        youWin.style.display = 'flex';
        userScore++;
        playerScore.textContent = `Your score: ${userScore}`;
    }
}

const scissorsResult = () => {
    if (userPick == 'SCISSORS' && computerPick == 'SCISSORS'){
        youTie.style.display = 'flex';
        youWin.style.display = 'none';
        compuWins.style.display = 'none';
    } else if (userPick == 'SCISSORS' && computerPick == 'ROCK'){
        youTie.style.display = 'none';
        youWin.style.display = 'none';
        compuWins.style.display = 'flex';
        computerScore++;
        compuScore.textContent = `Computer´s score: ${computerScore}`;
    } else if (userPick == 'SCISSORS' && computerPick == 'PAPER'){
        youTie.style.display = 'none';
        compuWins.style.display = 'none';
        youWin.style.display = 'flex';
        userScore++;
        playerScore.textContent = `Your score: ${userScore}`;
    }
}

restartBtn.addEventListener('click', () =>{
    playerPick.textContent = ``;
    compuPick.textContent = ``;
    youTie.style.display = 'none';
    compuWins.style.display = 'none';
    youWin.style.display = 'none';
    playerScore.textContent = `Your score: 0`;
    compuScore.textContent = `Computer´s score: 0`;
    userScore = 0;
    computerScore = 0;
})
