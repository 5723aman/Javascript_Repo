// const user={
//     name: "Aman",
//     age: 23,

//     welcomMessage : function () {
//         console.log(`${this.name}, walcome to this website`)
//         console.log(this);
//     }
// }

// user.welcomMessage();
// user.name = "Khushi"; // it will print khushi beacuse this always print the current value here the current value is khushi.
// user.welcomMessage();

// console.log(this);



//THIS INSIDE FUNCTION
// this inside functio gives undefined because functio has local varibale not this property

// function chai(){
//     let username = "Aman"
//     console.log(this.username);
// }

// chai();





// ARROW FUNCTION

// const chai =  () =>{
//     let username = "Aman"
//     console.log(this)
// }

// chai();





// way of declaring arrow function

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

// console.log(addTwo(3,4));





//USE OF IMPLICT WAY

const addTwo = (num1,num2) => (num1+num2);

// in this we dont use parnthesis so we will not write return
console.log(addTwo(3,4));