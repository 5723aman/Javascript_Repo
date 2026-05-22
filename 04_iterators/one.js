// for loop

// for(let index=0; index<Array.length; index++){
//     const element = array[index];
// }

// for(let index=0; index<10; index++){
//     const element = index;
//     if(index==5){
//         console.log("5 is the best number")
//     }
//     console.log(element);
// }



// for(let i=0; i<10; i++){
//     console.log(`this is outer lopp ${i}`)
//     for(let j=0; j<10; j++){
//         console.log(`this is inner loop ${j}`)
//     } 
// }



//Break and Continue

// break in JavaScript

// break is used to immediately stop a loop or switch statement.

for(let i = 1; i <= 5; i++){

    if(i == 3){
        break;
    }

    console.log(i);
}



// continue in JavaScript

// continue skips the current iteration and moves to the next iteration.


for(let i = 1; i <= 5; i++){

    if(i == 3){
        continue;
    }

    console.log(i);
}