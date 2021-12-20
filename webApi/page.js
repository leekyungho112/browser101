const box = document.querySelector('.box:nth-child(7)');
const scrollByPx = document.querySelector('.scroll_by');
const scrollToPx = document.querySelector('.scroll_to');
const scrollIntoSpecial = document.querySelector('.scroll_special');
function getPage(e) {
  console.log(box.getBoundingClientRect());
  console.log('client:', e.clientX, e.clientY);
  console.log('page:', e.pageX, e.pageY);
}

box.addEventListener('click', getPage);

scrollByPx.addEventListener('click', () => {
  window.scrollBy(0, 100);
});

scrollToPx.addEventListener('click', () => {
  window.scrollTo(0, event.pageY + 100);
});
scrollIntoSpecial.addEventListener('click', () => {
  box.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
});
