// singleton
// Object.create = new myObj

//  object literals
const JsUser = {
    name: "Hasan",
    "Full Name": "Hasan Kabir",
    age: 23,
    location: "Dhaka",
    email: "hasankabir0720@gmail.com",
    isLogedIn: false,
    lastLogedIn:  ["SaturDay", "SunDay", "MonDay"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Full Name"]);

// JsUser.email = "hasanridoy8205@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.email = "hasankobir243@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());