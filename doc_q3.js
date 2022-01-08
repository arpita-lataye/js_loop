/* 3. Write while loop statement to print the following series:
10, 20, 30 … … 300  */

for (i=10; i<=300; i+=10){
    console.log(i)
}
console.log()

/* 4. Write a while loop statement to print the following series
105, 98, 91 ………7 */

let a=require('readline-sync');
let num=a.questionInt('enter number:');
for (i=15; i>=1; i--){
    console.log(num*i)
}
console.log()

/* 5. Write a program to print the first 10 natural numbers in reverse order. */
for (i=10; i>=1; i--){
    console.log(i)
}
console.log()

/* 6. Write a program to print the sum of the first 10 Natural numbers. */
let sum=0;
for (i=1; i<=10; i++){
    sum+=i
}
console.log(sum)
console.log()

/* 7. Write a program to print the sum of the first 10 Even numbers. */
let sum1=0;
for (i=1; i<=10; i++){
    if (i%2==0){
        sum1+=i
    }
}
console.log(sum1)
console.log()

/* 8. Write a program to print a table of a number entered from the user. */
let n=require('readline-sync');
let num1=n.questionInt('Enter number:');
for (i=1; i<=10; i++){
    console.log(num1*i)
}
console.log()


/* 9. Write a program to display all even numbers that fall between two numbers (exclusive both numbers)
entered by the user. */
let b=require('readline-sync');
let n1=b.questionInt('Enter 1st number:');
let n2=b.questionInt('enter 2nd number:')
for (n1=0; n1<=n2; n1++){
    if (n1%2==0){
        console.log(n1)
    }
}