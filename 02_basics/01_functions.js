//  function sayMyName(){
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }

// sayMyName()

// function addTwoNumners(num1,num2){  //If one operand is string,
//                                     //JavaScript converts the other into string.
//     console.log(num1+num2);
// }

// addTwoNumners(3,"A")

// console.log(Number("5") + 5);  // this is the way to force the number addition

// function addTwoNumners(num1, num2){
//     console.log(num1+num2);
// }
// const result= addTwoNumners(3,5);
// console.log("REsult : ", result)
// //so tbis will give ndefined int result beacuase we are not
//                                     //returning it

 function addTwoNumners(num1, num2){
   let result=(num1+num2);
   return result;
   console.log("Aman") // this willl not get executed it is after the return beacuse it is unreachable
}
const result= addTwoNumners(3,5);
console.log("REsult : ", result)

// another way to take parameter
function logginUser(username){
    return `${username} just logged in`
}
console.log(logginUser("Aman")) // if you dont pass any argument here it will give undefined


//when we have to add more than one number then we will use REST opertor

// function addCart(...num1){
//     return num1;

// }
// console.log(addCart(200,3000, 4000));





function addCart(val1,val2,...num1){
    return num1; // here the output will be 4000, 6000 because val1 is 200 and val2 is 3000

}
console.log(addCart(200,3000, 4000, 6000));







// how to pass object in the functiom

const user={
    name:"Aman",
    age:23
}

function details(anyData){
    console.log(`my name is ${anyData.name} and my age is ${anyData.age}`);
}

// details(user)    // ← "user" object is passed as an argument
//   //↓
// function details(anyData) {  // ← "anyData" is the parameter that receives "user"
//     console.log(`my name is ${anyData.name} and my age is ${anyData.age}`);
//     // anyData is now the user object, so this logs:
//     // "my name is Aman and my age is 23"
//}





// passing the array in the function

const arr=[1,2,3,4,5];

function getArray(anyData){
    return anyData[0];
}

//console.log(getArray(arr)) // here we are passing the array as an argument and it will return the first element of the array which is 1
console.log(getArray([10,20,30,40,50])) // here we are passing the array directly as an argument and it will return the first element of the array which is 10



