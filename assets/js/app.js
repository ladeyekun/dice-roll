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
const dice1Obj = select('.dice-one');
const dice2Obj = select('.dice-two');

listen('click', rollBtn, () => {
    console.log('Dice roll');
    roll();
});

function roll() {
    let dice1 = getRandomNumber(1, 6);
    let dice2 = getRandomNumber(1, 6);

    dice1Obj.innerHTML = getFontAwesomeElement(dice1);
    dice2Obj.innerHTML =getFontAwesomeElement(dice2);
}

function getDiceFont(dice) {
    switch (dice) {
        case 1:
            return 'one';

        case 2:
            return 'two';

        case 3:
            return 'three';

        case 4:
            return 'four';

        case 5:
            return 'five';

        case 6:
            return 'six';
    }
}

function getFontAwesomeElement(dice) {
    let output = '';
    output += `<i class="fa-solid fa-dice-${getDiceFont(dice)}"></i>`;

    return output;
}