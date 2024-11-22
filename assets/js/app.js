'use strict';

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollBtn = select('.roll-button');
const rollArea = select('.area');
const rollNumber = getRandomNumber(11, 66);
const dice1 = select('.dice-one');
const dice2 = select('.dice-two');

listen('click', rollBtn, () => {
    console.log('Dice roll');
    roll();
});

function roll() {
    let number = getRandomNumber(11, 66);
    console.log(`Number is ${number}`);
}