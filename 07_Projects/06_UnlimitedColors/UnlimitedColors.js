// Genarate a Random Color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let Color = '#'

    for (let i = 0; i < 6; i++) 
    {
        Color += hex[Math.floor(Math.random() * 16)]
    }
    return Color;
}

// console.log(randomColor());
// console.log(Math.floor(Math.random() * 16));

let intervalID;

const startChangingColor = function(){
if(!intervalID)
    {
        intervalID = setInterval(changeBGCloor, 1000)
    }
    function changeBGCloor(){
    document.body.style.backgroundColor = randomColor();
    // console.log(randomColor());
    }
}

const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
