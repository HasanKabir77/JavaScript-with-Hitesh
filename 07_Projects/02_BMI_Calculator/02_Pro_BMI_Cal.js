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