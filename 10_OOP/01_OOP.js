const user = {
    userName : "Hasan",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database.");
        // console.log(`User Name : ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, isLoggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedin = singedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this
}

const userOne = new User('Hasan Kabir', 9, true)
const userTwo = new User('Kabir Hasan', 13, false)

console.log(userOne);
console.log(userTwo);