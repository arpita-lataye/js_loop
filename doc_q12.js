/* 12.Write a program to find the product of the digits of a number accepted from the user. */

let a=require('readline-sync');
let num=a.questionInt('enter number:');
let result=1;
// let product=1;
while (num>0){
    b=num%10
    result=result*b
    num=(Math.floor(num/10))
}
console.log(result)