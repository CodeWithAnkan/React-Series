const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

// const myTotal = myNums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        Price: 999
    },
    {
        itemName: "Py Course",
        Price: 2999
    },
    {
        itemName: "Mobile Dev Course",
        Price: 5999
    },
    {
        itemName: "Data Science Course",
        Price: 12999
    }
]

const TotalPrice = shoppingCart.reduce((accumulator, item) => (accumulator + item.Price), 0);

console.log(TotalPrice);