const box = document.querySelector('.box:nth-child(7)');

function getPage(e) {
  console.log(box.getBoundingClientRect());
  console.log('client:', e.clientX, e.clientY);
  console.log('page:', e.pageX, e.pageY);
}

box.addEventListener('click', getPage);
