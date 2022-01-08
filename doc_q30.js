/* 30. Write a program to find the sum of following series
1 + 8 + 27 …………n terms */

let a=require('readline-sync');
let n=a.questionInt('how many time do you want:');
let sum1=0
let s2=''
for (i=1; i<=n; i++){
    s=i**3
    if (i==n){
        s2+=s+' ' 
    }
    else{
        s2+=s+' '+"+ "
    }
}
console.log(s2)


