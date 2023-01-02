const symbol = document.querySelector('#symbol');

(async function stock() {
  const response = await fetch('/api/stock');
  const data = await response.json();

  data.forEach((obj) => {
    const ul = document.createElement('ul');
    symbol.appendChild(ul);

    for (let key in obj) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML += `${key}: ${obj[key]}`;
    }
  });
})();
