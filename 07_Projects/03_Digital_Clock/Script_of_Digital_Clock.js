const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') // its also work same

// console.log(date.toLocaleTimeString());

setInterval(function(){
let date = new Date()
clock.innerHTML = date.toLocaleTimeString();
}, 1000)