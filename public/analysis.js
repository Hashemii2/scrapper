import { totalAnalysis } from './helper.js';

export async function analysis() {
  const response = await fetch('/api/data');
  const data = await response.json();

  const values = data.map((obj) => Object.values(obj));

  const inputElem = document.createElement('input');
  const divElem = document.createElement('div');

  inputElem.type = 'button';
  inputElem.value = 'تحلیل بازار';

  divElem.setAttribute('id', 'analysis');

  document.body.appendChild(inputElem);
  document.body.appendChild(divElem);

  inputElem.addEventListener('click', () => {
    document.querySelector('#analysis').innerHTML = totalAnalysis(values);
  });
}
