const SocialMediaUser = {}

SocialMediaUser.id = "1326A"
SocialMediaUser.Name = "Mashrafee"
SocialMediaUser.Email = "mash213@gmail.com"
SocialMediaUser.isLoggedIn = true

// console.log(SocialMediaUser);

 const regularUser = {
    userEmail: "user213@gmail.com",

        fullName: {
            userFullName: {
                firstname: "Hasan",
                lastName: "Kabir"
            }   
        }
 }
//  console.log(regularUser.fullName?.userFullName);

const obj1 = {1: "Hasan", 2: "Sharif"}
const obj2 = {3: "Monir", 4: "Shuvo"}

// let obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3); 

// console.log(Object.keys(SocialMediaUser));
// console.log(Object.keys(regularUser));


// console.log(Object.values(SocialMediaUser));
// console.log(Object.values(regularUser));

//  ---------------------- Object 3rd part ----------------------

const course = {
    coursename: "JS in Hindi",
    price: "$999",
    Instructror: "Hitesh Choudury"
}


const {Instructror} = course
console.log(Instructror);

const navbar = () => {
    
}