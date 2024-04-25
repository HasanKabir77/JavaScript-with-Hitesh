// --------------------- Reduce Function ---------------------

let myNum = [1, 2, 3, 4]

// let myTotal = myNum.reduce(function(acc, curVal)
// {
//     console.log(`acc Value: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// },0)

const myTotal = myNum.reduce( (acc, curVal) => acc + curVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Javascript',
        price: 999
    },
    {
        itemName: 'Python',
        price: 499
    },
    {
        itemName: 'C# Game Dev.',
        price: 1111
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);