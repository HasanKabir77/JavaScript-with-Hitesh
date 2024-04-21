//  ---------------------- Video 21 ----------------------

//  ---------------------- Scope ----------------------

let a = 100
if(true)
{
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
    // var c = 30
}
// console.log(a);
// console.log(b);
// console.log(a);

//  ---------------------- Video 22 ----------------------

//  ---------------------- Scope (Details) ----------------------

function one() {
    const username = "Hasan"

    function two() {
        const website = "Facebook"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if(true)
{
    const username = "Kabir"
    if(username === "Kabir")
    {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); // Error
}

// console.log(username); // Error

//  console.log(addOne(5)); // it can be use before initialize

function addOne(num) 
{
    return num + 1    
}
console.log(addOne(5));

// console.log(addTwo(5)); // can't use before intialize

const addTwo = function(num)
{
    return num + 2
}
console.log(addTwo(5));
