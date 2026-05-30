//for each loop

const coding  = ["aman",'khushi', 'harsh','sonali'];

coding.forEach(function (item){
    console.log(item);
})

// using arrow function

const users1 = [
    {name: "Aman", age: 21},
    {name: "Rahul", age: 22}
];

users1.forEach((user1) => {
    console.log(user1.name);
});


// passed as a refernece
const coding1 = ["js", "cpp", "python"];

function printMe(item){
    console.log(item);
}

coding1.forEach(printMe);


// example of objects in array using for each loop

const user = [
    {
        name: "Aman",
        age: 21
    },
    {
        name: "Rahul",
        age: 22
    },
    {
        name: "Priya",
        age: 20
    }
];

users.forEach(function(user){
    console.log(user.name);
});

//accessing multiple properties
users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old`);
});


// function as a refernec
const users = [
    {name: "Aman", age: 21},
    {name: "Rahul", age: 22},
    {name: "Priya", age: 20}
];

function printUser(user){
    console.log(user.name, user.age);
}

users.forEach(printUser);