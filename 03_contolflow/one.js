// if condition = in this the condition should be true to run the code inside the scope

// if(2==2){
//     console.log("Aman");
// }
// console.log("it will always get executed")

// if(2==="2"){
//     console.log("Aman");
// }
// console.log("it will always get executed")

// [<,>, >=,<=,==, ===, !=, !==]


// const tem=41;

// if(tem<50){
//     console.log("temperatire is less")
// }
// console.log ("  i will always get executed regatdless of condition")


// const temp=41;

// if(temp>50){
//     console.log("temperatire is less")
// }
// console.log ("  i will always get executed regatdless of condition")


// const tem=41;

// if(tem<50){
//     console.log("temperatire is less")
// }
// else{
//     console.log("weither if will get executed or else will get executed depend upon the condtion")
// }
// console.log ("  i will always get executed regatdless of condition")





// const p=200;

// if(p>100){
//     let power="fly";
//     console.log(`i can ${power}`)
// }
// console.log(`i can ${power}`) // this will give problem because power is defined inside the scopw which is not accisseble outside the scope



//NESTING

// const balance=1000;

// if(balance <900){
//     console.log("balance less than 900")
// }else if(balance<100){
//     console.log("balance less than 1000")
// }else if(balance==1000){
//     console.log("bakance is equal to the 1000")
// }else{
//     console.log("balance is greater than 1000")
// }


// const userLoggedin = true;
// const debitcard=true;

// if(userLoggedin && debitcard){      // here both the condition should be true
//     console.log("shopping is allowed")
// }   

//NOTE:
//  and operator is used to check the both the condition where as or operator is used to check many conditions



//NUllish coalescing operator(??) : works on null and undefined value

//The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when the left side is:

// null
// OR
// undefined

//syntax: value1 ?? value2


let name = null;

let user = name ?? "Guest";

console.log(user);


let age = 20;

let result = age ?? 18;

console.log(result);

