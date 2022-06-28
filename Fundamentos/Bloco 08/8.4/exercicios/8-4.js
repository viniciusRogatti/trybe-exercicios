// [1].Dada uma matriz, transforme em um array.
/* const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];  
const flatten = arrays.reduce((acc, curr) => acc.concat(curr),[])
console.log(flatten); */  


// Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// [2].Crie uma string com os nomes de todas as pessoas autoras.

const namesAutores = books.reduce((acc, curr) => `${acc} ${curr.author.name},`,'').trim();
// console.log(namesAutores);
// console.log(typeof namesAutores);

//[3].Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const idadeAutores = books.reduce((acc, curr) => acc += curr.releaseYear - curr.author.birthYear,0) / books.length;
// console.log(idadeAutores);

// [4].Encontre o livro com o maior nome.

const maiorNomeLivro = books.reduce((acc, curr) => acc.length > curr.name.length ? acc : acc = curr.name ,'');
// console.log(maiorNomeLivro);

// [5].Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const letrasA = names.reduce((acc, curr) => acc += curr.split('').filter((element) => element.toLocaleLowerCase() === 'a').length,0)
// console.log(letrasA);

// [6].Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
 const mediaNotas = [];
 const finalArray = [];
grades.reduce((acc, curr) => mediaNotas.push(acc = curr.reduce((acc2, curr2,idx,src) => acc2 += curr2/src.length,0).toFixed(2)),0);
 return students.reduce((acc3, curr3, idx) => {
  finalArray.push({name: curr3, average: parseFloat(mediaNotas[idx])},);
  return finalArray;
},{})
}
console.log(studentAverage());
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
