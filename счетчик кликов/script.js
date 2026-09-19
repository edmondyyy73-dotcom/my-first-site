const countElement = document.getElementById('count');
let number = +countElement.innerHTML;

colorChange = () => {
    if (number > 0) {
        countElement.style.color = 'green';
    } else if (number < 0) {
        countElement.style.color = 'red';
    } else countElement.style.color = 'grey';
}

colorChange();

const incrementBtnElement = document.getElementById('button-increment');
const decrementBtnElement = document.getElementById('button-decrement');
const resetBtnElement = document.getElementById('button-reset');

incrementBtnElement.addEventListener('click', () => {
    number += 1;
    countElement.innerHTML = number;
    colorChange();
});

decrementBtnElement.addEventListener('click', () => {
    number -= 1;
    countElement.innerHTML = number;
    colorChange();
});

resetBtnElement.addEventListener('click', () => {
    number = 0
    countElement.innerHTML = number;
    colorChange();
});
