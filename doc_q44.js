/* Write Python programs to sum the given sequences:

1^2 + 3^2 + 5^2 + ….. + n^2 (Input n) */

let a=require('readline-sync');
let n=a.questionInt('enter number:');
let i=1;
let sum=0;
while (i<=n){
    sum+=i**2
    i+=2
}
console.log(sum)