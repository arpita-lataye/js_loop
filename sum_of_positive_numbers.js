// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let num=require('readline-sync')
let number = num.questionInt('Enter a number:');

while(number <= 10) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = num.questionInt('Enter a number: ');
}

// display the sum
console.log(`The sum is ${sum}.`);