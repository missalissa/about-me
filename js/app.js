'use strict';

const username = prompt('Hello! What\'s your name?');
console.log('user\'s name is: ' + username);
alert('Hello, ' + username + '! ' + 'Let\'s get started. The first five questions will be yes or no.');

let score = 0;

// Questions one through 5 are yes / no
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
    console.log('do I eat spaghetti? ' + snacks.includes('spaghetti'));
    console.log('user replied: ' + snacksAns);
    if (snacksAns.toLowerCase() === 'no' || snacksAns.toLowerCase() === 'n') {
        alert('Correct, I do not care for spaghetti. I worked in an Italian restaurant and have eaten enough for one lifetime.');
        score++;
    } else {
        alert('No spaghetti for me. I worked in an Italian restaurant and have eaten enough for one lifetime.');
    }
};

// Q6. Guessing game with numeric value and max four attempts

alert('Okay, ' + username + ', now for a different kind of quesiton. The answer to this next one will be a number between 1 and 30, and you\'ll have four tries to get it right.');

runMiles ();
function runMiles () {
    for (let attempts = 1; attempts < 5; attempts++) {
        const milesAns = parseInt(prompt('Most days, I ride my bike to school. How many miles is it round trip?'));
        console.log('user replied: ' + milesAns);
        if (milesAns === 11) {
            alert('Good guess! That is correct.');
            score++;
            break;
        } else if (milesAns <= 10) {
            alert('More than that. You have ' + (4 - attempts) + ' left.');
        } else {
            alert('Not quite that many. You have ' + (4 - attempts) + ' left.');
        }
    }
};

// Q7. Guessing game with multiple possible correct answers and max six attempts

alert('Final quesiton, ' + username + '. There are lots of possible answers, and you\'ll have six tries this time. Good luck!');

runCheese();

function runCheese () {
    for(let cheeseAttempts = 1; cheeseAttempts < 7; cheeseAttempts++) {
        const cheese = ['chevre', 'parmesan', 'blue', 'brie']; // my favorite cheese
        const cheeseAns = prompt('Can you guess one of my favorite kinds of cheese?').toLowerCase();
        console.log('what is my favorite cheese answer:' + cheese.indexOf());
        console.log('user replied: ' + cheeseAns);
        if (cheese.includes(cheeseAns)){
            alert('Yep, you guessed it! My favorites are ' + cheese[0] + ', ' + cheese[1] + ', ' + cheese [2] + ', and ' +  cheese [3] + '.');
            score++;
            break;
        }else {
            alert('Not so. You have ' + (6 - cheeseAttempts) + ' tries left!');
        }
    }
};
alert('Thanks for playing, ' + username + '. You got ' + score + ' out of 7 questions correct!');
