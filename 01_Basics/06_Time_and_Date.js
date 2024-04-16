let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myNewDate = new Date(1999, 6, 20)
// let myNewDate = new Date("2024-01-20")

console.log(myNewDate.getDay());

let myTimeStamp = new Date.now()
console.log(myTimeStamp);
console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('default', {weekday: "long"})
console.log(newDate.toLocaleString('default', {weekday: "long"}));