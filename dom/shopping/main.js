// 입력창에 텍스트 가져오기
const form = document.getElementById('shopping_form');
const input = form.querySelector('input');
// 엔터키나 버튼 클릭시 추가
const button = document.querySelector('.confirm');
// ul 리스트에 입력받은 텍스트 랜더링
const list = document.querySelector('.list');

const painting = (text) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const div = document.createElement('div');

  li.setAttribute('class', 'item');
  div.setAttribute('class', 'divider');
  li.innerText = text;
  button.innerText = '❌';
  button.addEventListener('click', (e) => {
    const target = e.target.parentNode;
    list.removeChild(target);
  });
  li.append(button);
  li.append(div);
  list.append(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const text = input.value;
  if (text === '') {
    return;
  }
  painting(text);
  input.value = '';
  input.focus();
};

form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleSubmit);
