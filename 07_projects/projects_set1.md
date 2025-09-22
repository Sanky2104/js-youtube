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

## Project 4

``` javascript
let randomValue = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let userGuess = document.querySelector('#guessField');
let guessArray = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

// let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userGuess.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// this func validates that a valid number is passed by the user
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    // prevGuess.push(guess);
    if (numOfGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomValue}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomValue) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomValue) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomValue) {
    displayMessage(`Number is TOOO high`);
  }
}

//cleanup  method
function displayGuess(guess) {
  userGuess.value = '';
  guessArray.innerHTML += `${guess}, `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  let newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomValue = parseInt(Math.random() * 100 + 1);
    // prevGuess = [];
    numOfGuesses = 1;
    guessArray.innerHTML = '';
    remaining.innerHTML = `${11 - numOfGuesses}`;
    userGuess.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userGuess.value = '';
  userGuess.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```
## Project 5

``` javascript
let insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> 
  </div> 
  `;
});

```

## Project 6

```javascript
//generate a random color

let randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())

let intervalID;

let changeBackground = function () {
  document.body.style.backgroundColor = randomColor();
};

let startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBackground, 1000);
  }
};
let stopChangingCOlor = function () {
  console.log('STOPPING...');
  clearInterval(intervalID);
  intervalID = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingCOlor);

```