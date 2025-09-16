## Projects related to DOM

## project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

``` javascript
let body = document.querySelector('body');

let buttons = document.querySelectorAll('.button');

// console.log(buttons)

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    body.style.backgroundColor = event.target.id
  });
});
```


## Project 2

``` javascript
let form = document.querySelector('form');

// this will give you empty value...so we write it inside the event listener to get values after submit
//let height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()
  let weight = parseInt(document.querySelector('#weight').value)
  let height = parseInt(document.querySelector('#height').value)
  let results = document.querySelector('#results')
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height'
  } else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight'
  }
  else{
    let bmi = (weight/((height*height)/10000)).toFixed(2)

    if (bmi < 18.6){
      results.innerHTML = `<span>BMI is ${bmi}</span> and you are underweight`
    } else if (bmi >= 18.6 && bmi<= 24.9){
      results.innerHTML = `<span>BMI is ${bmi}</span> and you are normal weight`
    } else {
      results.innerHTML = `<span>BMI is ${bmi}</span> and you are overweight`
    }
  }
})
```

## Project 3

``` javascript
let clock = document.getElementById('clock');

//in set intervali, the time is in milliseconds
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```