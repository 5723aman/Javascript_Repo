//for of loop

// for...of Loop in JavaScript

// The for...of loop is used to iterate over the values of iterable objects like:

// Arrays
// Strings
// Maps
// Sets
// It gives direct access to the element values.


// Advantages
// Simple and clean syntax
// Directly accesses values
// Easier than traditional for loop for arrays



//example with array
const arr=[1,2,3,4,5];

for (const num of arr){
    console.log(num);
}


//example with string

const name="Aman";
for(const ele of name){
    console.log(ele);
}


// Difference Between for...in and for...of
// Loop	Gives
// for...in	Index/keys
// for...of	Values



//MAP

// # `Map` in JavaScript

// A `Map` is a collection of key-value pairs where:

// * keys can be of any datatype
// * insertion order is maintained

// ---

// # Creating a Map

// ```js id="jlwm1p"
// let map = new Map();
// ```

// ---

// # Adding Values

// ```js id="jlwm2p"
// map.set("name", "Aman");
// map.set("age", 21);
// ```

// ---

// # Accessing Values

// ```js id="jlwm3p"
// console.log(map.get("name"));
// ```

// Output:

// ```js id="jlwm4p"
// Aman
// ```

// ---

// # Example

// ```js id="jlwm5p"
// let map = new Map();

// map.set(1, "Apple");
// map.set(2, "Banana");

// console.log(map);
// ```

// ---

// # `for...of` Loop on Map

// We use `for...of` to iterate through map elements.

// ---

// # Example

// ```js id="jlwm6p"
// let map = new Map();

// map.set("name", "Aman");
// map.set("city", "Delhi");

// for(let [key, value] of map){

//     console.log(key, value);
// }
// ```

// Output:

// ```js id="jlwm7p"
// name Aman
// city Delhi
// ```

// ---

// # Explanation

// Each map element is stored as:

// ```js id="jlwm8p"
// [key, value]
// ```

// So:

// ```js id="jlwm9p"
// let [key, value]
// ```

// uses destructuring to separate:

// * key
// * value

// ---

// # Iterating Only Keys

// ```js id="jlwmaq"
// for(let key of map.keys()){
//     console.log(key);
// }
// ```

// ---

// # Iterating Only Values

// ```js id="jlwmbq"
// for(let value of map.values()){
//     console.log(value);
// }
// ```

// ---

// # Advantages of Map

// * Keys can be any datatype
// * Maintains insertion order
// * Faster lookup than objects in many cases

// ---

// # Viva Definition

// “A Map in JavaScript stores data in key-value pairs and maintains insertion order. The `for...of` loop can be used with destructuring to iterate through keys and values of a map.”




let map = new Map();

map.set("name", "Aman");
map.set("city", "Delhi");

for(let [key, value] of map){ // here it destructure the object as key and value pair without this it will give array in putput  

    console.log(key, value);
}