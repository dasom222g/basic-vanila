const increaseButton = document.querySelector('.increaseButton');
const decreaseButton = document.querySelector('.decreaseButton');
const couterEl = document.querySelector('h2');

const button = document.querySelector('button');
console.log('button', button);

let count = 0;

const min = 0;
const max = 10;

const updateValue = () => {
  couterEl.innerText = count;
};

updateValue();

const increase = () => {
  if (count >= max) return;
  count += 1;
  updateValue();
};

const decrease = () => {
  count = count <= min ? 0 : count - 1;
  updateValue();
};

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
