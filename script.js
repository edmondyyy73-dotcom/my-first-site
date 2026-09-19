// счетчик кликов
const countElement = document.querySelector('#counter-count');
let number = +countElement.textContent;

colorChange = () => {
    if (number > 0) {
        countElement.style.color = 'green';
    } else if (number < 0) {
        countElement.style.color = 'red';
    } else countElement.style.color = 'grey';
}

colorChange();

const incrementBtnElement = document.querySelector('#counter-add');
const decrementBtnElement = document.querySelector('#counter-subtract');
const resetBtnElement = document.querySelector('#counter-reset');

incrementBtnElement.addEventListener('click', () => {
    number += 1;
    countElement.textContent = number;
    colorChange();
});

decrementBtnElement.addEventListener('click', () => {
    number -= 1;
    countElement.textContent = number;
    colorChange();
});

resetBtnElement.addEventListener('click', () => {
    number = 0
    countElement.textContent = number;
    colorChange();
});


// карточки товаров
const cardBtnElement = document.querySelector('#card-btn');

    cardBtnElement.addEventListener('click', () => {
    cardBtnElement.textContent = '✅ В корзине';
});


// список дел
const inputElement = document.querySelector('#input');
const addBtnElement = document.querySelector('#input-btn');
const listElement = document.querySelector('#list');

let inputData = '';

const addItem = () => {
    const deleteBtnElement = document.createElement('button');
    deleteBtnElement.className = 'delete-btn';
    deleteBtnElement.textContent = 'Удалить';
    
    const listTaskElement = document.createElement('p');
    listTaskElement.className = 'list-task';

    const listItemElement = document.createElement('li');
    listItemElement.className = 'list-item';
    listItemElement.appendChild(listTaskElement);
    listItemElement.appendChild(deleteBtnElement);

    if (inputElement.value !== '') {
        inputData = inputElement.value;

        listTaskElement.textContent = inputData;
        listElement.appendChild(listItemElement);
    
        inputElement.value = '';
    }
    else alert('Сначала заполните поле!');

    deleteBtnElement.addEventListener('click', () => {
        listItemElement.remove();
    });

    listTaskElement.addEventListener('click', () => {
        listTaskElement.classList.toggle('list-task__completed');
    });
}

addBtnElement.addEventListener('click', addItem)

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addBtnElement.click();
    }
})