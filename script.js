
let btnOne = document.getElementById('btn-plus');
let counter = 0;
btnOne.addEventListener('click', function increaseCounter() {
  counter++;
  document.getElementById('counter').innerText = counter;
})
let btnTwo = document.getElementById('btn-minus');
btnTwo.addEventListener('click', function decreaseCounter() {
  counter--;
  document.getElementById('counter').innerText = counter;
})

const btnOneStyle = document.getElementById('btn-plus');
btnOneStyle.style.background = 'green';
btnOneStyle.style.color = 'white';
btnOneStyle.style.fontSize = '25px';
btnOneStyle.style.height = '50px';
btnOneStyle.style.width = '75px';

const btnTwoStyle = document.getElementById('btn-minus');
btnTwoStyle.style.background = 'red';
btnTwoStyle.style.color = 'white';
btnTwoStyle.style.fontSize = '25px';
btnTwoStyle.style.height = '50px';
btnTwoStyle.style.width = '75px';
