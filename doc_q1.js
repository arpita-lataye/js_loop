/* 1. Write a program to print the following using while loop
Puja Na. First 10 Even numbers
b. First 10 Odd numbers
c. First 10 Natural numbers
d. First 10 Whole numbers */

// first 10 even numbers
for (i=1; i<=10; i++){
    if (i%2==0){
        console.log('even numbers',i);
    }
}

// b. First 10 Odd numbers
for (i=1; i<=10; i++){
    if (i%2!=0){
        console.log('odd number',i);
    }
}

// c. First 10 Natural numbers

for (i=1; i<=10; i++){
    console.log('natural numbers',i)
}

// d. First 10 Whole numbers
for (i=0; i<=10; i++){
    console.log('whole numbers',i)
}