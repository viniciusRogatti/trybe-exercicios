// [1].Crie uma função que receba um número e retorne seu fatorial.

/* const numFatorial = (number) => {
  if (number === 0) {
    return 1;
  } else { 
      const multiplicador =  numFatorial(number - 1) * number;
      return multiplicador;
    }
}; console.log(numFatorial(4)); */

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

/* const numFatorial = (number) => number === 0 ? 1 : number * numFatorial(number - 1);
console.log(numFatorial(3)); */


// [2].Crie uma função que receba uma frase e retorne a maior palavra.

let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu'// retorna 'aconteceu'
function contarLetras(string) {
const array = string.split(" ");
let palavra = array[0];
  for (let index of array) {
    if (index.length > palavra.length) {
      palavra = index;
    }
  } return palavra;
}
console.log(contarLetras(longestWord));