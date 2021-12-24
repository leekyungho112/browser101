// 입력창에 텍스트 가져오기
const form = document.getElementById('shopping_form');
const input = form.querySelector('input');
// 엔터키나 버튼 클릭시 추가
const button = document.querySelector('.confirm');
// ul 리스트에 입력받은 텍스트 랜더링
const list = document.querySelector('.list');

const painting = (text) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.setAttribute('data-id', Date.now());
  li.innerHTML = `
    <span class="item__name">${text}</span>
    <button class="item__button" data-id=${Date.now()}>❌</button>
    `;

  return li;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const text = input.value;
  if (text === '') {
    return;
  }
  const item = painting(text);
  list.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
};

//부모로 이벤트 위임
list.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  const target = event.target.parentNode;
  if (id === target.dataset.id) {
    list.removeChild(target);
  }
});
form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleSubmit);
