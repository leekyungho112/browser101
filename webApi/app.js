const rabbit = document.querySelector('.rabbit');
const find = document.querySelector('.find');

find.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
