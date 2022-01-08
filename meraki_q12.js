// Write a program to take 10 user input, and print the sum of that 10 inputs.

let i=50;
let sum=0;
while (i>=40){
    var a=require('readline-sync');
    var num=a.questionInt('Enter number:');
    sum+=num
    i--
}
console.log(sum)