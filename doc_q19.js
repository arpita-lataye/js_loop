/* 19. Write a program to add first n terms of the following series using a while loop :
1/1! + 1/2! + 1/3! + …….. + 1/n! */


let a=require('readline-sync');
let binary=a.questionInt('enter number:');
s=""
for (i=1; i<=10; i++){
    if (i==10){
        s=s+(1+"/"+i+" ")
    }
    else{
    s=s+(1+"/"+i+" "+"+")
    s+=" "
    }
}
console.log(s)