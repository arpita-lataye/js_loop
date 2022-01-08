/* 23. Write a program to accept 10 numbers from the user and display the largest & smallest number. */

let n=10;
let a=n
for (i=0; i<n; i++){
    let b=require('readline-sync');
    let num=b.questionInt('enter number:');
    for (j=1; j<=i; j++){
        console.log(num[j])
    }
}