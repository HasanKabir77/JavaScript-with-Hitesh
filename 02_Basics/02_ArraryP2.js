const myFevCartoonHero = ["Doremon", "ChotaBheem", "Raju", "Chutki", "Laddu"]

const moreHeros = ["Jaggu", "Kaliya", "GopalBhar"]

// myFevCartoonHero.push(moreHeros)
// console.log(myFevCartoonHero);

// const allHeros = myFevCartoonHero.concat(moreHeros)
// console.log(allHeros);

const  allnewHeros = [...myFevCartoonHero, ...moreHeros]
console.log(allnewHeros);


console.log(Array.isArray("Hasan"));
console.log(Array.isArray(["Hasan", "Sharif", "Monir"]));

console.log(Array.from("Hasan"));

let score1 = 123
let score2 = 321
let score3 = 456

console.log(Array.of(score1, score2, score3));
