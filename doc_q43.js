/* Write Python programs to sum the given sequences:

2/9 - 5/13 + 8/17 …… (print 7 terms) */

let n=2;
let d=9;
let m=1;
let sum=0;
let a=require('readline-sync');
let k=a.questionInt('Enter number:');
for (i=1; i<=k; i++){
    t=n/d
    sum+=t*m
    n+=3
    d+=4
    m*=-1
}
console.log(sum)