#Projects Related to DOM

## Solution Code of All Project's

## Project 01 Solution Code

```javascript
consol.log("Hasan")

const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach( function(btn)
{
    console.log(btn);
    btn.addEventListener('click', function(evnt){
        console.log(evnt);
        console.log(evnt.target);

        if (evnt.target.id === 'grey')
        {
            body.style.backgroundColor = evnt.target.id
        }
        if (evnt.target.id === 'white')
        {
            body.style.backgroundColor = evnt.target.id
        }
        if (evnt.target.id === 'blue')
        {
            body.style.backgroundColor = evnt.target.id
        }
        if (evnt.target.id === 'yellow')
        {
            body.style.backgroundColor = evnt.target.id
        }
        if (evnt.target.id === 'purple')
        {
            body.style.backgroundColor = evnt.target.id
        }
    })
})

```

## Project 02 Solution Code

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function(evnt){
    evnt.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid Height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid Weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height*height)/10000).toFixed(2))
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi <= 18.6)
        {
        message.innerHTML = `is Under Weight`
        }
        if(bmi >= 18.6 && bmi <= 24.9)
        {
        message.innerHTML = `is Normal Range`
        }
        if(bmi >= 24.9)
        {
        message.innerHTML = `is Overweight`
        }
    }


});

```

## Project 03 Solution Code

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') // its also work same

// console.log(date.toLocaleTimeString());

setInterval(function(){
let date = new Date()
clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 04 Solution Code

```javascript


let randomNumber = parseInt(Math.random() * 100 +1);
// console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if(playgame)
{
    submit.addEventListener('click', function(evnt){
        evnt.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please Enter a valid Number!')
    }
    else if(guess < 1)
    {
        alert('Please Enter a valid Number!')
    }
    else if(guess > 100)
    {
        alert('Please Enter a valid Number Under 100')
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game Over!\n Random Number was : ${randomNumber}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess)
{
    if(guess === randomNumber)
    {
        displayMessage(`You guessed it right.!`)
        endGame()
    }
    else if(guess < randomNumber)
    {
        displayMessage(`Your guess number is too Low.! \n Try again.!`)
    }
    else if(guess > randomNumber)
    {
        displayMessage(`Your guess number is too High.! \n Try again.!`)
    }
}
function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playgame = false;
    newGame()
}
function newGame()
{
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function (evnt) {
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playgame = true;
    })
    
}

```

## Project 05 Solution Code

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
    `
})
```

## Project 06 Solution Code

```javascript

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


```
