/* Write a program to input N numbers and then print the second largest number.*/

let a=require('readline-sync');
let n=a.questionInt('how many numbers you want to enter:');
if (n>1){
    let b=require('readline-sync');
    let max=b.questionInt('enter number:');
    let smax=b.question('enter number:');
    if (smax>max){
        t=smax
        smax=max
        max=t
    }
    for (i=1; i<n-2; i++){
        let m=require('readline-sync');
        let z=m.question('enter number:');
        if (z>1){
            smax=max
            max=z
        }
        else if (z>smax){
            smax=z
        }
    }
    console.log(smax)
}
else{
    console.log('please enter more than 1 number')
}