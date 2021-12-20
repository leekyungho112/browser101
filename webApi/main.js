const $ = (selector) => document.querySelector(selector);

function getScreen() {
  $(
    '.screen'
  ).innerText = `Window Screen : ${window.screen.width} : ${window.screen.height}`;

  $(
    '.outer'
  ).innerText = `Window Outer : ${window.outerWidth} : ${window.outerHeight}`;
  $(
    '.inner'
  ).innerText = `Window Height : ${window.innerWidth} : ${window.innerHeight}`;
  $(
    '.client_width'
  ).innerText = `Window documentElement ClientWidth : ${document.documentElement.clientWidth} : ${document.documentElement.clientHeight}`;
}

window.addEventListener('resize', getScreen);
getScreen();
