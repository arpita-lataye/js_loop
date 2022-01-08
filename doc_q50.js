/* Write a program to take N (N > 20) as an input from the user. Print numbers from 11 to N. When the number is a multiple of 3, print "Tipsy", when it is a multiple of 7, print "Topsy". When it is a multiple of both, print "TipsyTopsy". */

let a=require('readline-sync');
let n=a.questionInt('enter a number greater than 20:')
if (n<=20){
    console.log('invalid input')
}
else{
    for (i=11; i<n+1; i++){
        console.log(i)
        if (i%3==0 && i%7==0){
            console.log('TipsyTopsy')
        }else if (i%3==0){
            console.log('Tipsy')
        }else if (i%7==0){
            console.log('Topsy')
        }
    }
}

