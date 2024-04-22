//  IF - Else

//  <, Lessthan, < Greterthan, <=, Lessthan Equal, >=, Greterthan Equal, ==, Equal to, !=, Not Equal, ===, Strict Equal, !== Strict Not Equal

let a = 10
// let isUserLoggedIn = true
let toDayTemp = 37


// if(toDayTemp < 40)
// {
//     console.log("Tempeture is Less than 40");
// }
// else
// {
//     console.log("Tempeture is Greter than 40");
// }

const score = 200

if(score > 100)
{
    const power = "Fly"
    // console.log(`Player Power is: ${power}`);
}
// console.log(`Player Power is: ${power}`);


//  Short Hand Notetion
const balance = 1000

// if(balance > 500) console.log("Excuted"), 
// console.log("Second");

// if(balance < 500)
// {
//     console.log("Not Enough Money!");
// }
// else if(balance < 750)
// {
//     console.log("You Need More Money!");
// }
// else if(balance < 900)
// {
//     console.log("You Need Little Bit More Money!");
// }
// else
// {
//     console.log("You Have Enough Money!");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInByGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard )
{
    console.log("Purchase Permission Geranted!");
}
if(loggedInByGoogle || loggedInFromEmail)
{
    console.log("Log In Geranted!");
}