let a=require('readline-sync');
let num=a.questionInt('enter number:');
let sum=0;
for (i=1; i<=num; i++){
    if (num%i==0){
        sum+=i%num
    }
}
if (sum==num){
    console.log(num,'is a perfect number')
}
else{
    console.log(num,'is not a perfect number')
}