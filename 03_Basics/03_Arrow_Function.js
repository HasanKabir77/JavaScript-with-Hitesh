//  --------------- Video 23 ---------------
// --------------- Arrow Function ---------------

const user = 
{
    username : "Hasan",
    price: 1999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to Website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Kabir"
// user.welcomeMessage()

// console.log(this);

// function oneChai() 
// {
//     let username = "Hasan"
//     console.log(this.username);    // "This" Not Work in  Function, it can be use object
// }
// oneChai() 

// const OneChai = function()
// {
//     let username = "Hasan"

//     console.log(this.username);
// }

const OneChai = () =>
{
    let username = "Hasan"

    console.log(this.username);
}
// OneChai()


//  Basic Syntax of Arrow Function

// FN_name () =>{}

// const addTwo = (num1, num2) =>
// {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2 // Implicit return (same Line)

// const addTwo = (num1, num2) => (num1 + num2) // Implicit return (same Line)

const addTwo = (num1, num2) => ({username: "Hasan"}) // return Object

console.log(addTwo(7,8));

// const myArray = [2,3,5,6]

// myArray.forEach() 