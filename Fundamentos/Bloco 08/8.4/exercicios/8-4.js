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
console.log(letrasA);
