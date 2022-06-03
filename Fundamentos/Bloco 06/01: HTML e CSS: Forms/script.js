const btnSubmit = document.getElementById('btnSubmit');
const btnReset = document.getElementById('btnReset');

btnReset.addEventListener('click', () => {
  location.reload();
});

teste.appendChild(testeTexto);
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault(); 
});