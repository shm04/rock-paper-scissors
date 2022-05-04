 if (playerSelection === computerPlay) {
      return ('tie game')
 }

 if (
    (computerPlay === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerPlay === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerPlay === 'PAPER' && playerSelection === 'ROCK')
  ) {
    return ('computer wins')
  }