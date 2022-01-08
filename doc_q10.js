/* 10. Write a program to check whether a number is prime or not.*/

let a=require('readline-sync');
let num=a.questionInt('Enter number:');
let count=0;
for (i=1; i<=num; i++){
    if (num%i==0){
        count+=1
    }
}
if (count==2){
    console.log('prime number')
}
else{
    console.log('not prime number')
}