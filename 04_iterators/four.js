//for...in loop 

// for (let key in object) { // syntax
//     // code
// }


//example
const user = {
    name: "Aman",
    age: 21,
    city: "Delhi"
};

for (let key in user) {
    console.log(key, user[key]);
}