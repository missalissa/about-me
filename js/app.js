'use strict';

alert('Hello there!');

//Question one

// runSister();

// function runSister() {
//     const sister = true;
//     const sisterAns = prompt('First off, do I have a sister?');
//     console.log('has a sister? ' + sister);
//     if (sisterAns.toLowerCase() === 'yes') {
//         alert('You are correct! Her name is Trevi and she lives in Washington.');
//     } else {
//         alert('I do have a sister. Her name is Trevi and she lives in Washington.');
//     }
// };

// //Question 2 = false

// runStudies();

// function runStudies () {
//     const studies = ['Graphic Design', 'Linguistics', 'JavaScript'];
//     const studiesAns = prompt('Have I studied Astronomy?');
//     console.log('studied Astronomy? ' + studies.includes('Astronomy'));
//     if (studiesAns.toLowerCase() === 'no') {
//         alert('You are correct! I have studied a few things, but Astronomy is not one of them.');
//     } else {
//         alert('Alas, I have not studied Astronomy. I did study Linguistics though.');
//     }
// };

// //Question 3 = true

// runAnimals();

// function runAnimals() {
//     const animals = ['cats', 'dogs', 'giraffes'];
//     const animalsAns = prompt('Do I like giraffes?');
//     console.log('likes giraffes? ' + animals.includes('giraffes'));
//     if (animalsAns.toLowerCase() === 'yes') {
//         alert('It\'s true, I do. I have never met one but they seem like gentle creatures.');
//     } else {
//         alert('I do like giraffes. They seem like gentle creatures.');
//     }
// };

// //Question 4 = true

// runActivities();

// function runActivities () {
//     const activities = ['fishing', 'hiking', 'JavaScript'];
//     const activitiesAns = prompt('Do I like to fish?');
//     console.log('likes to fish? ' + activities.includes('fishing') );
//     if (activitiesAns.toLowerCase() === 'yes') {
//         alert('Yep, I do! I fish on the Missouri River with my Dad every year.');
//     } else {
//         alert('Actually, walleye fishing is one of my favorite things to do.');
//     }
// };

// //Question 5 = false

// runSnacks();

// function runSnacks () {
//     const snacks = ['salami', 'cheese', 'gummy bears'];
//     const snacksAns = prompt('Do I eat spaghetti?');
//     console.log('eats spaghetti? ' + snacks.includes('spaghetti'));
//     if (snacksAns.toLowerCase() === 'no') {
//         alert('Correct, I do not care for spaghetti. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
//     } else {
//         alert('No spaghetti for me. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
//     }
// };

//Question 6 

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

runCheese();

function runCheese () {
    for(let cheeseAttempt = 1; cheeseAttempt < 7; cheeseAttempt++) {
        const cheese = ['chevre', 'parmesan', 'blue', 'brie']; // my favorite snacks
        let cheeseAns = prompt('Can you guess one of my favorite cheese?');
        console.log('what is my favorite cheese answer:' + cheeseAns);
        if (cheese.includes(cheeseAns)){
            alert('Yep! You guessed it, that is one of my favorite cheeses.');
            //score++ 
            break;
        }else {
            alert('Incorrect' + cheeseAttempt + ' guess out of six have been used');
        }
    }
};

=======
if (cheeseAns === cheese.indexOf()) {
    alert('Well done! You are correct.');
};

// testing branch set up