const btnToggle = document.getElementById('btn-toggle');
const menu = document.getElementById('menu');
const body = document.getElementById('body');
btnToggle.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  body.classList.toggle('lock');
  btnToggle.classList.toggle('btn-open');
});
