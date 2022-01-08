/*16. Write a program to print the factorial of a number accepted by the user.*/

let a=require('readline-sync');
let i=a.questionInt('enter number:');
let fac=1
while (i>0){
    fac=fac*i
    i--
}
console.log(fac)