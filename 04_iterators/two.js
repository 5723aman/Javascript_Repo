// while Loop in JavaScript

// A while loop runs as long as the condition is true.


// How it Works
// Check condition
// If true → run code
// Repeat until condition becomes false
// Important Point

// If condition is false initially, loop will NOT run.

// while(condition){   syntax
//     // code
// }

let i = 1;

while(i <= 5){

    console.log(i);

    i++;
}




// do...while Loop in JavaScript

// do...while runs the code at least once, even if condition is false.


// Important Difference

// In do...while:

// code runs first
// condition checked later


// do{
//     // code
// }
// while(condition);



// let i = 1;

// do{

//     console.log(i);

//     i++;

// }while(i <= 5);