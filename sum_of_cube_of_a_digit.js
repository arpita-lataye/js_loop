let a=require('readline-sync');
let i=a.questionInt('enter number:');
let sum=0;
while (i>0){
    sum+=(i%10)*(i%10)*(i%10)
    i=(Math.floor(i/10))
}
console.log(sum)