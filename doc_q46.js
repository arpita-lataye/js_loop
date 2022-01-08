/* Write a complete Python program to do the following :
(i) read an integer X.
(ii) determine the number of digits n in X.
(iii) form an integer Y that has the number of digits n at ten's place and the most significant digit of X at one's place.
(iv) Output Y.
(For example, if X is equal to 2134, then Y should be 42 as there are 4 digits and the most significant number is 2). */

let a=require('readline-sync');
let x=a.questionInt('enter number:');
let temp=x;
let count=0;
let g=1;
while (temp !=0){
    g=temp%10
    count+=1
    temp=(Math.floor(temp/10))
y=count*10+g
}
console.log(y)