'use strict';

const username = prompt('Hello! What\'s your name?');
console.log('user\'s name is: ' + username);
alert('Hello, ' + username + '! ' + 'Let\'s get started. The first five questions will be yes or no.');

let score = 0;

// Q1. Siblings (true)

runSister();

function runSister() {
    const sister = true; // declares variable and value
    const sisterAns = prompt('First off, do I have a sister?'); // prompts first question
    console.log('do I have a sister? ' + sister);
    console.log('user replied: ' + sisterAns); 
    if (sisterAns.toLowerCase() === 'yes' || sisterAns.toLowerCase() === 'y') {
        alert('You are correct! Her name is Trevi and she lives in Washington.');
        score ++;
    } else {
        alert('I do have a sister. Her name is Trevi and she lives in Washington.');
    }
};

// Q2. Studies (false)

runStudies();

function runStudies () {
    const studies = ['Graphic Design', 'Linguistics', 'JavaScript'];
    const studiesAns = prompt('Have I studied Astronomy?');
    console.log('have I studied Astronomy? ' + studies.includes('Astronomy'));
    console.log('user replied: ' + studiesAns);
    if (studiesAns.toLowerCase() === 'no' || studiesAns.toLowerCase() === 'n') {
        alert('You are correct! I have studied a few things, but Astronomy is not one of them.');
        score++;
    } else {
        alert('Alas, I have not studied Astronomy.');
    }
};

// Q3. Animals (true)

runAnimals();

function runAnimals() {
    const animals = ['cats', 'dogs', 'giraffes'];
    const animalsAns = prompt('Do I like giraffes?');
    console.log('do I like giraffes? ' + animals.includes('giraffes'));
    console.log('user replied: ' + animalsAns);
    if (animalsAns.toLowerCase() === 'yes' || animalsAns.toLowerCase() === 'y') {
        alert('It\'s true, I do. They seem like gentle creatures.');
        score++;
    } else {
        alert('I do like giraffes. They seem like gentle creatures.');
    }
};

// Q4. Activities (true)

runActivities();

function runActivities () {
    const activities = ['fishing', 'hiking', 'JavaScript'];
    const activitiesAns = prompt('Do I like to fish?');
    console.log('do I like to fish? ' + activities.includes('fishing') );
    console.log('user replied: ' + activitiesAns);
    if (activitiesAns.toLowerCase() === 'yes' || activitiesAns.toLowerCase() === 'y') {
        alert('Yep! I still go fishing with my Dad every year.');
        score++;
    } else {
        alert('Actually, walleye fishing is one of my favorite things to do.');
    }
};

// Q5. Snacks (false)

runSnacks();

function runSnacks () {
    const snacks = ['salami', 'cheese', 'gummy bears'];
    const snacksAns = prompt('Do I eat spaghetti?');
    console.log('eats spaghetti? ' + snacks.includes('spaghetti'));
    if (snacksAns.toLowerCase() === 'no' || snacksAns.toLowerCase() === 'n') {
        alert('Correct, I do not care for spaghetti. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. Unless I were in Italy.');
        score++;
    } else {
        alert('No spaghetti for me. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. Unless I were in Italy.');
    }
};

// Q6. guessing game that takes numeric value, maximum of four attempts

// runMiles ();
// function runMiles () {
//     for (let attempts = 1; attempts < 5; attempts++) {
//         const milesAns = parseInt( prompt('How many miles did I ride yesterday?'));
//         console.log('miles answer was:' + milesAns);
//         if (milesAns === 11) {
//             alert('Good guess! That is correct.');
//             //score++ Add to each of your true answers
//             break;
//         } else if (milesAns <= 10) {
//             alert('Try again! I logged a few more miles.');
//         } else {
//             alert('Not quite that many. Try again.');
//         }
//     }
//     alert('Maximum tries reached.');
// };


// Q7. guessing game with multiple possible correct answers; maximum of six attempts

// runCheese();

// function runCheese () {
//     for(let cheeseAttempt = 1; cheeseAttempt < 7; cheeseAttempt++) {
//         const cheese = ['chevre', 'parmesan', 'blue', 'brie']; // my favorite snacks
//         let cheeseAns = prompt('Can you guess one of my favorite cheese?');
//         console.log('what is my favorite cheese answer:' + cheeseAns);
//         if (cheese.includes(cheeseAns)){
//             alert('Yep! You guessed it, that is one of my favorite cheeses.');
//             //score++ 
//             break;
//         }else {
//             alert('Incorrect' + cheeseAttempt + ' guess out of six have been used');
//         }
//     }
// };

// =======
// if (cheeseAns === cheese.indexOf()) {
//     alert('Well done! You are correct.');
// };
