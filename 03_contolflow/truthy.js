const useremail = "aman@gmail.com" // here we asuume that this is correct value instea of camparing
            //id string is empty then it will give the false value
if(useremail){
    console.log("user login")
}else{
    console.log("user not found")
}


//NOte: In JavaScript, every value is treated as either:

// * **Truthy** → behaves like `true`
// * **Falsy** → behaves like `false`

// especially inside conditions like:

// ```js
// if(condition)
// ```

// ---

// # Falsy Values in JavaScript

// There are only a few falsy values:

// ```js
// false
// 0
// -0
// 0n(bigint)
// ""
// null
// undefined
// NaN
// ```

// These behave as `false`.

// ---

// # Example

// ```js
// if(0){
//     console.log("Hello");
// }
// else{
//     console.log("Falsy");
// }
// ```

// Output:

// ```js
// Falsy
// ```

// because `0` is falsy.

// ---

// # Truthy Values

// Everything else is truthy.

// Examples:

// ```js
// 1
// -5
// "hello"
// []
// {}
// "0"
// "false"
// functiom(){}. empty function is also truthy
// ```

// ---

// # Example

// ```js
// if("Aman"){
//     console.log("Truthy");
// }
// ```

// Output:

// ```js
// Truthy
// ```

// because non-empty strings are truthy.

// ---

// # Important Confusing Cases

// ## Empty Array. is truthy

// ```js
// if([]){
//     console.log("Truthy");
// }
// ```

// ✅ Output:

// ```js
// Truthy
// ```

// ---

// ## Empty Object

// ```js
// if({}){
//     console.log("Truthy");
// }
// ```

// ✅ Truthy

// ---

// ## Empty String

// ```js
// if("")){
//     console.log("Truthy");
// }
// else{
//     console.log("Falsy");
// }
// ```

// ✅ Falsy

// ---

// # Real Use Example

// ```js
// let username = "";

// if(username){
//     console.log("User exists");
// }
// else{
//     console.log("No username");
// }
// ```

// Since empty string is falsy:

// ```js
// No username
// ```

// ---

// # Viva Definition

// “Truthy values are values that behave like true in conditions, while falsy values behave like false. JavaScript automatically converts values into boolean form during conditional checking.”




//there is differnt way to check empty array

if(useremail.length===0){
    console.log("array is empty")
}

const empoblect={};

if(Object.keys(empoblect).length===0){
    console.log("object is empty")
}