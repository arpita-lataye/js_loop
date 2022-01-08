
let a=require('readline-sync');
let n=a.questionInt('how many numbers you want to enter:');
if (n>1){
    let b=require('readline-sync');
    let min=b.questionInt('enter number:');
    // let smax=b.question('enter number:');/
    let max=b.questionInt('enter number:')
    // let smin
    if (min>max){
        t=min
        min=max
        max=t
    }
    for (i=1; i<n-2; i++){
        let m=require('readline-sync');
        let z=m.question('enter number:');
        if (z>1){
            min=max
            max=z
        }
        else if (z>min){
            min=z
        }
    }
    console.log('min',max)
    console.log('smin',min)
}
else{
    console.log('please enter more than 1 number')
}
