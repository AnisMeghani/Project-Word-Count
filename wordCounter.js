#!/usr/bin/env node
// Project Word Counter
import inquirer from "inquirer";
let counter = await inquirer.prompt([{
        type: "input",
        name: "Words",
        message: 'Please enter your sentence to count!'
    }]);
let count = counter.Words.trim().split(' ').length;
console.log(`Your Sentence has ${count} words`);
