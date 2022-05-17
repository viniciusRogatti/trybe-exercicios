
//[1].O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:O fatorial é representado pelo sinal ! 4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

/* let numberFatorial = 10;

for(var i= numberFatorial-1; i >= 1; i -= 1){
  numberFatorial = numberFatorial * [i];
}console.log("O número fatorial de 10 é", numberFatorial) */

//[2].Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

/* let word = 'tryber';
let palavraInvertida ="";
for(var i= word.length -1;i >=0; i-=1){
  palavraInvertida += word[i]
}console.log(palavraInvertida) */

//[3].Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
/* let array = ['java','javascript','css','python','html'];
let maior = ""
let menor = ""

for(var i=0; i < array.length; i+=1){
  if(array[i].length > maior.length)
  maior = array[i]
}console.log(maior)

for(var i=0; i < array.length; i+=1){  
  if(menor <= 0)
  menor = array[i]
  else if(array[i].length < menor.length)
  menor = array[i]
}console.log(menor) */

//[4].Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

/* let maiorPrimo = 0;
let numerosPrimos = [];

for (let i = 2; i <= 50; i+=1){
  let isPrime = true;
  for (let divisor = 2; divisor < i; divisor+=1)
  {
    if( i % divisor === 0)
    {
      isPrime = false;
      break;
    }
  } 
  if(isPrime)
  {
    maiorPrimo = i;
    numerosPrimos.push(i)   
  }
}
console.log("O maior Numero primo entre 0 e 50 é:",maiorPrimo)
console.log(numerosPrimos) */

//BONUS

//[1].Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

/* n = 5;
quadrado = "";

for(var i=0; i < n; i+=1){  
    quadrado += "* "; }
  for(var i2=0; i2 < n; i2+=1){ 
    console.log(quadrado)
} */

//[2].Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* n = 5;
triangulo = "";

for(var i=0; i < n; i+=1){
  if(i === 0)
  triangulo +="*"
  console.log(triangulo)
  triangulo += " *"
} */

//[3].Agora inverta o lado do triângulo. 

/* let n = 5;  
let asteriscos = "*";
let espaco = "";
let position = n;

for(var i=0;i <= n; i+=1){
  for(var i2=0; i2 <= n; i2 +=1){
    if(i2 < position){
      espaco = espaco + " ";
    }else{
      espaco = espaco + asteriscos;
    }
  }
  console.log(espaco);
  espaco = ""
  position -= 1;
} */

//



