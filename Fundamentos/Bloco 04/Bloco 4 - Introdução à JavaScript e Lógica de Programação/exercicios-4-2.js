//Exemplos

  /* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

  tasksList.push('Fazer exercícios da Trybe');
  tasksList.push("Fazer projeto da Trybe");  // ADICIONA MAIS UMA TAREFA NO FINAL DO ARRAY
  tasksList.unshift("Escovar os dentes");  //ADICIONA MAIS UMA TAREFA NO INICIO DO ARRAY
  tasksList.pop();   // remove a última tarefa
  tasksList.shift(): // // remove a primeira tarefa
   
  let indexOfTask = tasksList.indexOf('Reunião'); //PROCURA O ÍNDICE DE UM ITEM NO ARRAY
  console.log(indexOfTask); */


//Exercício-1 obtenha o valor "Serviços" do array menu:

  /* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  let menuServices  =  menu[1];
  console.log(menuServices) */

//Exercício-2 Exercício 1 Procure o índice do valor "Portfólio" do array menu:

  /* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  let indexOfPortfolio = menu[2];
  console.log(indexOfPortfolio); */

//Exercício-3 Adicione o valor "Contato" no final do array menu:

  /* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  menu.push("contato");
  console.log(menu); */

// PARTE DO FOR
/* 
const numero = 5;
const tabuada = [0,1,2,3,4,5,6,7,8,9];
var resultado;
for(var i=0; i < tabuada.length; i+=1){
resultado = numero * i;
console.log(resultado)
} */

/* let cars = ['Saab', 'Volvo', 'BMW'];
for(var i=0; i < cars.length; i+=1){
  console.log(cars[i])
} */

//[1].Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  /* for(var i=0; i < numbers.length; i+=1){
    console.log(numbers[i])
  } */
 

//[2].Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

  /* let numbersTotal =  0;

    for(var i=0; i < numbers.length; i+=1){
      numbersTotal += numbers[i]
    } console.log("A soma de todos os valores é:",numbersTotal) */
//[3].Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    
    /* let media = 0;
    for(var i=0; i < numbers.length; i+=1){
    media += numbers[i]};
    media = (media/ numbers.length)
    console.log("A media é:",media) */
    
//[4].Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20

  /* let media = 0;
  for(var i=0; i < numbers.length; i+=1){
  media += numbers[i]};
  media = (media/ numbers.length)
  if(media > 20){
    console.log("valor maior que 20")
  }
  else if (media <= 20){
    console.log("valor menor ou igual a 20")
  } */
//[5].Utilizando for, descubra qual o maior valor contido no array e imprima-o;

  /* let maiorNumero = 0;
  for( var i= 0; i < numbers.length; i+=1){      
    if(numbers[i] > maiorNumero)
    maiorNumero = numbers[i]
    }
    
  console.log(maiorNumero) */
//[6]Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/* let numerosImpares= 0;
for( var i= 0; i < numbers.length; i+=1){      
  if (numbers[i]% 2 > 0){
    numerosImpares += 1;
  }
  }
  console.log(numerosImpares)
 */
//[7].Utilizando for, descubra qual o menor valor contido no array e imprima-o;
/* let menorNumero = 0;
for(var i=0; i < numbers.length; i += 1){
  if(i <= 0){
    menorNumero = numbers[i]
  }
  else if(numbers[i] <  menorNumero){
    menorNumero = numbers[i]
  }
}
  console.log(menorNumero) */
//[8].Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

/* let array = [];
for(var i = 0; i < 25; i+=1){
  array[i] = i + 1  
}console.log(array) */

//EXERCÍCIO 9 SIMPLES 
/* for(var i=0; i < array.length; i+=1){
  console.log("O numero",array[i],"divido por 2","é igual:", array[i]/2)
} */

//[9].Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

  /* let array = [];
  let divisao=[]
  for(var i = 0; i < 25; i+=1){
    array[i] = i + 1
    for(var i = 0; i < 25; i+=1){
      divisao[i]  = i+ 1    
    if(array[i] = divisao[i]){
        divisao[i] = array[i]/2
      }
    }  
  }console.log(array)
  console.log(divisao) */
 
//BONUS 
let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
//[1].Ordene o array numbers em ordem crescente e imprima seus valores;
  /* let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];  */
  /* for(var i=0; i < numbersBonus.length; i+=1){ //Fazer um loop por todos os numeros do array
    for(var i2 = i + 1; i2 < numbersBonus.length; i2+=1){  // Um segundo loop sempre uma posição a mais que o primeiro
      if(numbersBonus[i] > numbersBonus[i2]){ //Substitui o numero da string atual sempre que encontrar outro menor
        let menor = numbersBonus[i2] // cria uma variável para armazenar o menor numero
        numbersBonus[i2] = numbersBonus[i] // Aqui o numero maior volta para a string
        numbersBonus[i] = menor // armazena o menor numero sempre
      }
    }
  }console.log(numbersBonus) */

  //[2].Ordene o array numbers em ordem decrescente e imprima seus valores;

  /* for(var i = 0; i < numbersBonus.length; i +=1){
    for(var i2 = i + 1; i2 < numbersBonus.length; i2 +=1)
    if(numbersBonus[i] < numbersBonus[i2]){
      let maior = numbersBonus[i2]
      numbersBonus[i2] = numbersBonus[i]
      numbersBonus[i] = maior
  }
  }console.log(numbersBonus) */
  
  //[3].
  /* let multiplicados = [];
  for(var i=0;i <  numbersBonus.length; i+=1){
    if( i == numbersBonus.length - 1){
      multiplicados.push(numbersBonus[i] * 2)
    }
    else{
      for(let i2 = i + 1; i2 <= i+1; i2+=1){
        multiplicados.push(numbersBonus[i] * numbersBonus[i2]);
      }
    }
  }console.log(multiplicados) */