/* 21. Write a python program to sum the sequence:
1 + 1/1! + 1/2! + 1/3! + …….. + 1/n! */

let v=require('readline-sync');
let n=v.questionInt('enter number');
let sum=0;
for (i=1; i<=n+1; i++){
    let fact=1
    for (j=1; j<i; j++){
        fact=fact*j
        t=1/fact
        sum+=t
    }
}
console.log(sum)