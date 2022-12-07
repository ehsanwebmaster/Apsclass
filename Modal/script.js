'use strict';
const btnModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const addClass = ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const removeClass = ()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', removeClass);
}
closeModalBtn.addEventListener('click', addClass);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    addClass();
  }
});
overlay.addEventListener('click', addClass);