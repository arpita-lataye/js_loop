// Create a loop that takes 10 numbers as input from the user.


let i=1;
let sum=0;
while (i<=10){
    var a=require('readline-sync');
    var num=a.questionInt('Enter number:');
    sum+=num
    i++
}
console.log(sum)