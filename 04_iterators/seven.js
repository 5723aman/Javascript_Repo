//map

const nums = [1, 2, 3, 4];

const result = nums.map((num) => {
    return num * 2;
});

console.log(result);

//map on objects

const users = [
    {name: "Aman", age: 21},
    {name: "Rahul", age: 22},
    {name: "Priya", age: 20}
];

const names = users.map(user => user.name);

console.log(names);

// chaining map

const nums = [1,2,3];

const result = nums
                .map(num => num * 10)
                .map(num => num + 1);

console.log(result);


//