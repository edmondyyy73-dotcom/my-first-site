const orderBtnElement = document.querySelector('#order');
const modalElement = document.querySelector('#modal');
const closeBtnElement = document.querySelector('#close');
const body = document.body;

const openModal = () => {
    modalElement.classList.add('opened');
    body.classList.add('no-scroll');
}

const closeModal = () => {
    modalElement.classList.remove('opened');
    body.classList.remove('no-scroll');
}

orderBtnElement.addEventListener('click', openModal);
closeBtnElement.addEventListener('click', closeModal);

modalElement.addEventListener('click', (event) => {
    if (event.target === modalElement) {
        closeModal();
    }
});