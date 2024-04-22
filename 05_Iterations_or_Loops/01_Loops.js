// --------------- for loop ---------------

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5)
//     {
//         console.log("5 is Best");
//     }
//     console.log(element);
// }

// console.log(element);

for (let i = 1; i <= 10; i++) 
{
    // console.log(`Outer loop Value: ${i}`);

    for (let j = 1; j <= 10; j++) 
    {
        // console.log(`Inner Loop Value ${j} and Inner loop Value of i: ${i} `);
        // console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

let myArray = ["Batman", "Superman", "Ironman"]

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) 
{
    const element = myArray[index];
    // console.log(element);
}

//  braek and continue

// for (let i = 1; i <= 20; i++) 
// {
//     if(i  == 5)
//     {
//         console.log(`Get i  Value is : ${i}`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) 
{
    if(i  == 5)
    {
        console.log(`Get i  Value is : ${i}`);
        continue
    }
    console.log(`Value of i is ${i}`);
}

// ----------- Complete Video 27 -----------