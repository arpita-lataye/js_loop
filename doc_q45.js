/* Write a Python program to print every integer between 1 and n divisible by m. Also report whether the number that is divisible by m is even or odd. */

let a=require('readline-sync');
let m=a.questionInt('enter value for m:');
let n=a.questionInt('enter value for n:');
for (i=1; i<n; i++){
    if (i%m==0){
        console.log(i,'is divisible by',m)
        if (i%2==0){
            console.log(i,'is even number')
        }else{
            console.log(i,'is odd number')
        }
    }
}