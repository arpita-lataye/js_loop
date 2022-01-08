/* Write programs to find the sum of the following series:
x - x2/2! + x3/3! - x4/4! + x5/5! - x6/6! (Input x) */

let a=require('readline-sync');
let x=a.questionInt('enter number:');
let n=a.questionInt('how many time do you want loop:');
let sum=0;
let m=1
for (i=1; i<=n; i++){
    fact=1
    for (j=1; j<i+1; j++){
        fact=fact*j
    term=x**i/fact
    sum +=term*m
    m=m*-1
    }
}
console.log(sum)
