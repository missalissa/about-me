"use strict"

// alert('Hello there!');

// const sister = true;
// const sisterAns = prompt('First off, do I have a sister?');
// console.log('has a sister? ' + sister);
// if (sisterAns.toLowerCase() === 'yes') {
//     alert('You are correct! Her name is Trevi and she lives in Washington.');
// } else {
//     alert('I do have a sister. Her name is Trevi and she lives in Washington.');
// }

// const studies = ['Graphic Design', 'Linguistics', 'JavaScript'];
// const studiesAns = prompt('Have I studied Astronomy?');
// console.log('studied Astronomy? ' + studies.includes('Astronomy'));
// if (studiesAns.toLowerCase() === 'no') {
//     alert('You are correct! I have studied a few things, but Astronomy is not one of them.');
// } else {
//     alert('Alas, I have not studied Astronomy. I did study Linguistics though.');
// }

// const animals = ['cats', 'dogs', 'giraffes'];
// const animalsAns = prompt('Do I like giraffes?');
// console.log('likes giraffes? ' + animals.includes('giraffes'));
// if (animalsAns.toLowerCase() === 'yes') {
//     alert('It\'s true, I do. I have never met one but they seem like gentle creatures.');
// } else {
//     alert('I do like giraffes. They seem like gentle creatures.');
// }

// const activities = ['fishing', 'hiking', 'JavaScript'];
// const activitiesAns = prompt('Do I like to fish?');
// console.log('likes to fish? ' + activities.includes('fishing') );
// if (activitiesAns.toLowerCase() === 'yes') {
//     alert('Yep, I do! I fish on the Missouri River with my Dad every year.');
// } else {
//     alert('Actually, walleye fishing is one of my favorite things to do.');
// }

// const snacks = ['salami', 'cheese', 'gummy bears'];
// const snacksAns = prompt('Do I eat spaghetti?');
// console.log('eats spaghetti? ' + snacks.includes('spaghetti'));
// if (snacksAns.toLowerCase() === 'no') {
//     alert('Correct, I do not care for spaghetti. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
// } else {
//     alert('No spaghetti for me. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
// }

// Q6. guessing game that takes numeric value, maximum of four attempts

let numAttemptsMiles = 1; // initializer, number of attempts
const miles = 11; // miles ridden
let milesAns = prompt('How many miles did I ride yesterday?'); // user input
console.log('user guessed ' + milesAns);

// // begin loop if milesAns is not equal to miles

if (parseInt(milesAns) === miles) {
    alert('Good guess! That is correct.');
    console.log('user guessed the correct answer');
} else {
    console.log(numAttemptsMiles);
    while (parseInt(milesAns) !== miles || numAttemptsMiles < 4) {
        if (parseInt(milesAns) < miles) {
            milesAns = prompt('Try again! I logged a few more miles.');
            console.log('user guessed too few miles');
        } else if (parseInt(milesAns) > miles) {
            milesAns = prompt('Not quite that many. Try again.');
            console.log('user guessed too many miles');
        } else {
            alert('Good guess! That is correct.');
            console.log ('user guessed correct amount');
        }
        numAttemptsMiles++;
    }
    // maximum amount of tries reached
    alert('No more guesses on this one. Thanks for trying!');
}

// Q7. guessing game with multiple possible correct answers; maximum of six attempts

let numAttemptsCheese = 0; // initializer
const cheese = ['chevre', 'parmesan', 'blue', 'brie']; // my favorite snacks
let cheeseAns = prompt('Can you guess one of my favorite cheeses?');

if (CheeseAns !== cheese.indexOf()) {
    while (numAttemptsCheese < 5) {
        prompt('try again!');
        console.log(numAttemptsCheese);
        numAttemptsCheese++;
    } 
} else {
    while (numAttemptsCheese >= 5) {
        prompt('no more guesses!');
        console.log(numAttemptsCheese);
        numAttemptsCheese++;
    }

if (cheeseAns === cheese.indexOf()) {
    alert('Well done! You are correct.');
};

// testing branch set up