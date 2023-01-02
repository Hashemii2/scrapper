const span = document.getElementById('time');

function time() {
  span.textContent = ` زمان ${new Date().toLocaleTimeString()} تاریخ ${new Date().toLocaleDateString()}`;
}

setInterval(time, 1000);
