let backdrop = document.querySelector('.modal-backdrop');
let modal = document.querySelector('.modal');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

open.addEventListener('click', () => {
    modal.classList.add('show');
    backdrop.classList.add('show');
})

close.onclick = () => {
    modal.classList.remove('show');
    backdrop.classList.remove('show');
}
