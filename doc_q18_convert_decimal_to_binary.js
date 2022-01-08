/* 18. Write a program to convert binary to decimal. */

let a=require('readline-sync');
let binary=a.question('enter number:');
let decimal = 0 ;
for (digit in binary){ 
    decimal = decimal*2 + parseInt(digit)
} 
console.log(decimal) 




