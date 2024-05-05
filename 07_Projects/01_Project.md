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