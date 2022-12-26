const span = document.getElementById('time');

function time() {
  span.textContent = new Date().toLocaleTimeString();
}

setInterval(time, 1000);
