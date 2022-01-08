/* Write a Python program to sum the sequence:

1 + 1/1! + 1/2! + 1/3! + ….. + 1/n! (Input n) */

let a=require('readline-sync');
let n=a.questionInt('enter number:');
let sum=0;
for (i=1; i<n+1; i++){
    fact=1
    for (j=1; j<i; j++){
        fact=fact*j
    t=1/fact
    sum+=t
    }
}
console.log(sum)
