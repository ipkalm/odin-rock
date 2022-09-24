'use strict';

const LIST = ['rock', 'paper', 'scissors'];
const WINSCORE = 5;

let getComputerChoice = (list) => {
    const rand = Math.floor(Math.random() * list.length) + 1;
    return list[rand];
};

let getPlayerSelection = (list) => {
    let userChoice = '';
    let errorCounter = 0;

    while (!userChoice) {
        userChoice = prompt(`Choose between ${list}`);

        if (errorCounter === 3){
            console.log('User noting input');
            return false;
        } else if (!userChoice) {
            console.log(`User must input ${list}`);
            errorCounter++;
        }
    }

    return userChoice.toLowerCase();
};

let playRound = (playerSelection, computerSelection) => {
    let returnValue;
    let msg = 'win';

    if ((playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')) {
        // return true if player win
        msg = `you ${msg}`;
        returnValue = true;
    } else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper')) {
        //return false if computer win
        msg = `computer ${msg}`;
        returnValue = false;
    } else {
        msg = `friendship ${msg}`;
    }

    console.log(msg);
    return returnValue;
};


let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    while(true) {
        if(playerScore === 5) {
            console.log(`Player win with ${playerScore} score`);
            break;
        } else if (computerScore === 5) {
            console.log(`Computer win with ${computerScore} score`);
        }

        console.log(`Round #${round + 1}`);

        let playerSelection = getPlayerSelection(LIST);
        let computerSelection = getComputerChoice(LIST);

        if(!playerSelection) {
            console.log(`Game exit, because player wont play.`);
            return false;
        }

        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === undefined) {
            console.log(`roundResult is ${roundResult}`);
        } else if (roundResult === false) {
            computerScore++;
        } else if (roundResult === true) {
            playerScore++;
        }

        round++;
    }

    console.log(`The game end on ${round} round`);
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
};