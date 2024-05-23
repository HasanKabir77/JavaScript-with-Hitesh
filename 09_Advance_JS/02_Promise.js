const promiseOne = new Promise(function(resolve, reject){
    // do an Async task
    // DB Calls. network etc

    setTimeout(function(){
        console.log('Async task is Complete.!');
    resolve();

    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed.!");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task Two');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Async 2 Resolve');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Hasan", email: "hasankabir@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true;
       if(!error)
        {
            resolve({userName: "Hasan", Pass: "1236544789"})
        }
        else
        {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolve or rejected."))

promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error)
         {
             resolve({userName: "Javascript", Pass: "123"})
         }
         else
         {
             reject('ERROR: something went wrong with JS')
         }
     }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUser()
// {
//     try 
//     {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);    
//     } catch (error) 
//     {
//         console.log("E: ", error);    
//     }
// }
// getAllUser();

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/HasanKabir77')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))