//  ---------------- Function ----------------

function sayMyHelloWorld(){
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
}

    // sayMyName()

// function addTwoNum(num1, num2){

// console.log(num1+num2);

// }

function addTwoNum(num1, num2)
{
    // let result = num1+num2
    // return result
    return num1 + num2
}
    

// const result1 = addTwoNum(3,5)
// console.log("Result is : ", result1);
// console.log(addTwoNum(3,5));

function userLoginMessage(username){
    // if(username === undefined)
    if(!username)
    {
        // console.log("Please Enter User Name");
        return
    }
    return `${username} just Logged in.`
}

// userLoginMessage("Hasan") // -- Function Excuted, But not return value

// console.log(userLoginMessage("Hasan"))
// console.log(userLoginMessage())


//  --------------------- Video No. 20 ---------------------

function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200, 450, 550, 1520));

const User = {
    username : "Hasan",
    price: 249
}

function handleObject(anyobject)
{
    console.log(`User Name is ${anyobject.username} and Price is ${anyobject.price}`);
}

handleObject(User)