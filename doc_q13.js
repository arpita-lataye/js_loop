/* 13. Write a program to reverse the number accepted by the user. */

let a=require('readline-sync');
let num=a.questionInt('Enter number:');
let reverse=0;
while (num>0){
    x=num%10;
    reverse=(reverse*10)+x;
    num=(Math.floor(num/10))
}
console.log(reverse)