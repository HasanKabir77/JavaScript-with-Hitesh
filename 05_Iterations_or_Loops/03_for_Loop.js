// --------------- for of loop ---------------

const myArray = [1, 2, 3, 4, 5]

for (const i of myArray) 
{
    // console.log(`Value of i is: ${i}`);
}

const greeting = "Hello world!"
for (const greet of greeting) 
{
    // console.log(`Each Character is : ${greet}`);    
}

//  maps

const map = new Map()
map.set('BN', "Bangladesh")
map.set('USA', "United State of America")
map.set('KSA', "Kingdom of Saudi Arab")

// console.log(map);

for (const [key, value] of map)
{
    // console.log(key, ': -', value);    
}

let myObject = {
    'game1': "NFS",
    'game2': "COC",
    'game3': "WCC"
}

// for (const [key, value] of myObject)
// {
//     console.log(key, ':-', value);    
// }

