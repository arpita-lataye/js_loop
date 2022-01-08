let a=require('readline-sync');
let num=a.questionInt('enter number:');
let sum=0;
while (num>0){
      sum+=(num%10)*(num%10)
      num=(Math.floor(num/10))
}
console.log(sum)