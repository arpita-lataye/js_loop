let a=require('readline-sync');
let n=a.questionInt('enter number:');
var string=""

for (let i=5; i>=n; i--){
    for (let j=5; j>n; j--){
        string=string+i    }
    string+="\n"
    
}
console.log(string)