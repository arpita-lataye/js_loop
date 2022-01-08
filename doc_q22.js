/* 22. Write a program to accept 10 numbers from the user and display it’s average. */

let sum=0;
for (i=1; i<=10; i++){
    let a=require('readline-sync');
    let num=a.questionFloat('enter number:');
    sum+=num
}
avg=sum/10
console.log(avg)