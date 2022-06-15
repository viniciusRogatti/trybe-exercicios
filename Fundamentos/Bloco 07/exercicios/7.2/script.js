const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const result = document.getElementById('result');

function verficarInput() {
  if (value1.value === '' || value2.value === '') {
    throw new Error('Por favor preencha os dois campos!')
  } else if (isNaN(value1.value) || isNaN(value2.value)) {
    throw new Error('Por favor preencha os campos apenas com números!');
  }
}

function sum() {
  try {
    verficarInput();
    const soma = parseInt(value1.value) + parseInt(value2.value);
    result.innerText = `Resultado: ${soma}`;
  } catch (error) {
    alert(`Erorr: ${error.message}`);
    result.innerText = '';
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
