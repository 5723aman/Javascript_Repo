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