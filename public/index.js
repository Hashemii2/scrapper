const scrapperInfo = document.querySelector('#info');

(async function getScrapData() {
  const response = await fetch('/api/data');

  const data = await response.json();

  const ul = document.createElement('ul');
  ul.setAttribute('id', 'bourseInfo');
  scrapperInfo.appendChild(ul);

  data.forEach((element) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    ul.appendChild(li);

    let key = Object.keys(element),
      value = Object.values(element);

    li.innerHTML += `${key}: ${value}`;
    console.log(`${key}: ${value}`);
  });
})();
