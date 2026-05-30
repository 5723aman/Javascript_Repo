// filter

//syntax
// array.filter((element) => {
//     return condition;
// });

const nums = [1, 2, 3, 4, 5, 6];

const result = nums.filter((num) => {
    return num > 3;
});

console.log(result);

// array of obkects

const users = [
    { name: "Aman", age: 21 },
    { name: "Rahul", age: 17 },
    { name: "Priya", age: 22 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);


//why this didnt wrok
// const nums = [1,2,3,4];

// const result = nums.filter((num) => {
//     num > 2;
// });

// console.log(result);