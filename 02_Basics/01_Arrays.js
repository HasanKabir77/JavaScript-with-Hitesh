//  Arrary

const myArrary = [0, 1, 2, 3, 4, 5]

console.log(myArrary);
console.log(typeof myArrary);

// ------------ Arrary Methods ------------

myArrary.push(6)
console.log(myArrary);
myArrary.pop()
console.log(myArrary);

myArrary.unshift(8)
console.log(myArrary);

myArrary.shift()
console.log(myArrary.includes(8));

const  newArrary = myArrary.join()

console.log(newArrary);


    // ------------ slice, splice Methods ------------

console.log("A ", myArrary);

const myNewArraay1 = myArrary.slice(1, 3)
console.log(myNewArraay1);

console.log("B ", myArrary);

const myNewArraay2 = myArrary.splice(1, 3)
console.log("C ", myArrary);
console.log(myNewArraay2);