// exercício de fixação

/* const pushNumber = (list, number) => list.push(number);
let numbers = [];
pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
console.log(numbers); */

/* const pushNumber = (list, number) => list.push(number);
let numbers = [];
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => console.log(numbers), 3000); */

// Agora veremos um exemplo prático de como podemos utilizar funções callback. Copie e analise com calma cada trecho da implementação do código, se necessário, volte na explicação para que a implementação seja bem compreendida!
const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const renda = 1000;
const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;

    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
};
const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item))
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };

  // acc é a sigla para accumulator (acumulador)
  // curr é a sigla para current (valor atual)

// despesaMensal(renda, despesas, somaDespesas);
// console.log(somaDespesas(despesas));

// Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro (callback).
// Vamos ver um exemplo de como esse processo acontece:

// Definição da função userFullName
/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
  const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
}; */
// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

// Agora, faça estes exercícios de fixação:
// [1] - Adicione uma callback como parâmetro da função getUser.
// Insira o retorno da função getUser;
// Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
// Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",  
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser(userFullName));
console.log(getUser(userNationality)); */
 // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
 // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// [2] - Passe, como parâmetro e como retorno, uma callback para a função getUser.
/* No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa: */
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
let result;
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    result = callback(user);
  }, delay());
  return result;
};

console.log(getUser(userFullName)); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
console.log(getUser(userNationality)); // deve imprimir "Ivan is Russian" depois de um certo tempo