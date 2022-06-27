
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
        birthYear: 1921,
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


// [1].Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const firstAuthorSince47 = array => array.find(element => element.author.birthYear ===  1947).author.name;
// console.log(firstAuthorSince47(books));

// [2].Retorne o nome do livro de menor nome.
const smallerName = () => {
  let smallName;  
  books.forEach((book) => {
    if (!smallName ||book.name.length < smallName.length ) {
      smallName = book.name;
    }
  });
  return smallName; 
} // console.log(smallerName());

//[3].Encontre o primeiro livro cujo nome possui 26 caracteres.
const firstBook26Length = books.find((book) => book.name.length === 26);
// console.log(firstBook26Length);

//[4].Ordene os livros por data de lançamento em ordem decrescente.
// const booksSort = books.sort((a,b) => a.releaseYear - b.releaseYear);
// console.log(booksSort);

//[5].Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const seculoXXcheck = books.every((item) => item.author.birthYear > 1901 && item.author.birthYear < 2000);
// console.log(seculoXXcheck);

//[6].Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const decada80 = books.some((item) => item.author.birthYear > 1980 && item.author.birthYear < 1990);
// console.log(decada80);

//[7].Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const anos = [];
books.forEach((book) => anos.push(book.author.birthYear));
const nasceramNoMesmoAno = () => anos.every((ano,index) => !anos.some((ano2,index2) => ano === ano2 && index2 !== index));
console.log(nasceramNoMesmoAno());