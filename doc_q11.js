/* 11. Write a program to find the sum of the digits of a number accepted from the user. */

let a=require('readline-sync');
let num=a.questionInt('enter a number:');
let sum=0;
while (num !=0){
    sum=sum+(num%10)
    num=(Math.floor(num/10))
}
console.log('sum',sum)
