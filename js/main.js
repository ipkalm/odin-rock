'use strict';

const LIST = ['rock', 'paper', 'scissors'];
const ROUNDS = 5;

let getComputerChoice = (list) => {
    const rand = Math.floor(Math.random() * list.length) + 1;
    return list[rand];
};

let playerSelection = (list) => {
    const userChoice = prompt(`Choose between ${list}`);
    if (!userChoice) {
        console.error(`User must input ${list}`);
        return;
    }

    return userChoice.toLowerCase();
};

let playRound = (playerSelection, computerSelection) => {

    if(!playerSelection) {
        return;
    }

    let msg = 'win';
    if ((playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')) {
        // return player + 1 to score
        msg = `you ${msg}`;
    } else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper')) {
        //return computer + 1 to score
        msg = `computer ${msg}`;
    } else {
        msg = `friendship ${msg}`;
    }

    console.log(msg);
};


let game = () => {
    for(let i = 0; i < ROUNDS; i++) {
        console.log(`Round #${i+1}`);
        playRound(playerSelection(LIST), getComputerChoice(LIST));
    }
};


game();