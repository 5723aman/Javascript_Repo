//reduce

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);


//arr of object

const cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 1000 }
];

const total = cart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0);

console.log(total);