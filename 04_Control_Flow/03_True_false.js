const userEmail = "hasan@gmail.com"

// if(userEmail)
// {
//     console.log(`User Email is: ${userEmail}`);
// }
// else
// {
//     console.log(`user Email Not Found`);
// }

// Default False Value
/*
    false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/
// Default True Value
/*
    "0", 'false', " ", [], {} (this is an Object), function() {},
*/

const myArray = []

if(myArray.length ===0)
{
    console.log("Array is Empty!");
}


const myObj = {}

if(Object.keys(myObj).length ===0)
{
    console.log("Object is Empty!");
}
//  Terniry Operator

const iceTea = 100
iceTea >=80 ? console.log("High Price") : console.log("Avg. Price");
