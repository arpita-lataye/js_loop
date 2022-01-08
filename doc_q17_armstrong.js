/* 17. Write a program to check whether a number is Armstrong or not. (Armstrong number is a number that is. */

let a=require('readline-sync');              /* this code is only for three digit armstrong number */
let i=a.questionInt('Enter number:');
let num=i;
let sum=0;
while (i>0){
    sum+=(i%10)*(i%10)*(i%10)
    i=(Math.floor(i/10))
}    
if (num==sum){
    console.log('number is armstrong')
}
else {
    console.log('number is not armstrong')
}


let b=require('readline-sync');                 /* this code is for more than three digit number. */
let n=b.questionInt('enter number:');
let j=n;
let count=0;
while (j>0){
    count=count+1
    j=(Math.floor(j/10))
}
let sum1=0;
// let j=n;
while (j>0){
    d=1%10
    x=1
    p=1
    while(x<=count){
        p=p*d
        sum1+=p
        j=(Math.floor(j/10))
    }
}
if (sum1==j){
    console.log('armstrong number')
}
else {
    console.log('not armstrong number')
}