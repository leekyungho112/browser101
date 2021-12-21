const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const mouse = document.querySelector('.mouse');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  mouse.style.left = `${x}px`;
  mouse.style.top = `${y}px`;
  mouse.innerHTML = `${x}px,${y}px`;
});
