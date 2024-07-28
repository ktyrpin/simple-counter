const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const display = document.querySelector('#display');

display.textContent = 0;
let newNumber = 0;

const decreaseNumber = () => {
	newNumber -= 1;
	display.textContent = newNumber;
	display.style.color = 'red';
};

const resetNumber = () => {
	newNumber = 0;
	display.textContent = newNumber;
	display.style.color = 'black';
};
const increaseNumber = () => {
	newNumber += 1;
	display.textContent = newNumber;
	display.style.color = 'green';
};

decrease.addEventListener('click', decreaseNumber);
increase.addEventListener('click', increaseNumber);
reset.addEventListener('click', resetNumber);
