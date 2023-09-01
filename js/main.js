AOS.init();

const fa = document.querySelector('.modal__icon');
const modalMenu = document.querySelector('.modal-list');

fa.addEventListener('click', () => {
    fa.classList.toggle('modal__icon_active');
    modalMenu.classList.toggle('modal-list_active');
});