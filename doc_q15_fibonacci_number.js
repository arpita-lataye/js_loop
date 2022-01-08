/* 15. Write a program to print the Fibonacci series till n terms (Accept n from user) */

let a=require('readline-sync');
let n=a.questionInt('enter number:');
let x=0;
let y=1;
let z=0;
while (z<=n){
    console.log(z)
    x=y
    y=z
    z=x+y
}