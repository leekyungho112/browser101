const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const mouse = document.querySelector('.mouse');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
    mouse.innerHTML = `${x}px,${y}px`;
  });
});
