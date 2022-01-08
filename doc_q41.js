/* Write a program to accept the age of n employees and count the number of persons in the following age group:

(i)    26 - 35
(ii)   36 - 45
(iii)  46 - 55 */

let a=require('readline-sync');
let n=a.questionInt('Enter a number:');
let g1=0;
let g2=0;
let g3=0;
for (i=1; i<n+1; i++){
    let b=require('readline-sync');
    let age=b.questionInt('Enter employee age:');
    if (age>=26 && age<= 35){
        g1+=1
    }
    if (age>=36 && age<=45){
        g2+=1
    }
    if (age>=46 && age<=55){
        g3+=1
    }
}
console.log('Employee in age group 26-35:',g1)
console.log('Employee in age group 36-45:',g2)
console.log('Employee in age group 46-55:',g3)