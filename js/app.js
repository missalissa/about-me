"use strict"

alert('Hello there!');

const sister = true;
const sisterAns = prompt('First off, do I have a sister?');
console.log('has a sister? ' + sister);
if (sisterAns.toLowerCase() === 'yes') {
    alert('You are correct! Her name is Trevi and she lives in Washington.');
} else {
    alert('I do have a sister. Her name is Trevi and she lives in Washington.');
}

const studies = ['Graphic Design', 'Linguistics', 'JavaScript']
const studiesAns = prompt('Have I studied Astronomy?');
console.log('studied Astronomy? ' + studies.includes('Astronomy'));
if (studiesAns.toLowerCase() === 'no') {
    alert('You are correct! I have studied a few things, but Astronomy is not one of them.');
} else {
    alert('Alas, I have not studied Astronomy. I did study Linguistics though.');
}

const animals = ['cats', 'dogs', 'giraffes']
const animalsAns = prompt('Do I like giraffes?');
console.log('likes giraffes? ' + animals.includes('giraffes'));
if (animalsAns.toLowerCase() === 'yes') {
    alert('It\'s true, I do. I have never met one but they seem like gentle creatures.');
} else {
    alert('I do like giraffes. They seem like gentle creatures.');
}

const activities = ['fishing', 'hiking', 'JavaScript']
const activitiesAns = prompt('Do I like to fish?');
console.log('likes to fish? ' + activities.includes('fishing') );
if (activitiesAns.toLowerCase() === 'yes') {
    alert('Yep, I do! I fish on the Missouri River with my Dad every year.');
} else {
    alert('Actually, walleye fishing is one of my favorite things to do.');
}

const snacks = ['salami', 'cheese', 'gummy bears']
const snacksAns = prompt('Do I eat spaghetti?');
console.log('eats spaghetti? ' + snacks.includes('spaghetti'));
if (snacksAns.toLowerCase() === 'no') {
    alert('Correct, I do not care for spaghetti. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
} else {
    alert('No spaghetti for me. I worked in an Italian restaurant and have eaten enough pasta for one lifetime. But if I were in Italy I would totally eat pasta.');
}