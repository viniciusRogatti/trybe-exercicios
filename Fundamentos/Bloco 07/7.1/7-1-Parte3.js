// [3].Crie uma página com um contador de cliques
const btn = document.getElementById('btn');
const count = document.getElementById('count');

btn.addEventListener('click', () => {  
  let contador = parseInt(count.innerText)
  contador += 1;
  count.innerText = contador;
})

// [4].Crie duas funções JavaScript com as seguintes especificações:
// - Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// - A função deverá receber um nome por parâmetro;
// - Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a  'Tryber x aqui!';
// - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
