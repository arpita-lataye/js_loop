/* 26. Write a program to print the following series till n terms.
2 , 22 , 222 , 2222 _ _ _ _ _ n terms. */

let a=require('readline-sync');
let n=a.questionInt('how many times do you want:');
let b=a.questionInt('enter number to print siries:');
let s=b;
let sum=0;
let q=""
for (i=0; i<=n; i++){
    q+=s
    q+=" "
    sum+=s
    s=(s*10)+b
}
console.log(q)