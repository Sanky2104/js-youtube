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

