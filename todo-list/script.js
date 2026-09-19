const inputElement = document.querySelector('#input');
const addBtnElement = document.querySelector('#add-btn');
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

