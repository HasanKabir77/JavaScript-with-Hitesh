

// === (Triple Equale use to Strict Check)
// It's Check not only Value, but also DataType


// Two Type of Data Type

// Primitive    Non-Primitive

/*
    Primitive Data Type are
    1. String
    2. Number
    3. Bollean
    4. null
    5. undefined
    6. Symbol
    7. BigInt
*/

// Non-Primitive Data Type

/*
    1. Arrary
    2. Objects
    3. Function
*/

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID );

let heros = ["Spiderman", "Batman", "Avengers", "Pokemone", "Chota-Bheem"];

console.log(heros)

var myObj = {
    name: "Hasan Kabir",
    mobile: "01878734120",
    email: "hasankabir0720@gmail.com"
}

console.log(myObj)

const myFunction = function()
    {
        console.log("Hello world")
    }

    console.log(myFunction)