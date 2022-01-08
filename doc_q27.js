/* 27. Write a program to print the following series till n terms.1 4 9 16 25 _ _ _ _ _ n terms. */

let s='';
let a=require('readline-sync');
let n=a.questionInt('Enter number:');
for (i=1; i<=n; i++){
    // console.log(i*i)
    s+=i*i
    s+=' '
}
console.log(s)