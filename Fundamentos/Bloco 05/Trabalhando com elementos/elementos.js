/* console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> */
//[1].Acesse o elemento elementoOndeVoceEsta.

/* console.log(document.querySelector('#elementoOndeVoceEsta')) */

//[2].Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const colorElement = (backgroundColor) => (document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor = backgroundColor)
colorElement('red')

//[3].Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const textElement = (texto) => (document.querySelector('#primeiroFilhoDoFilho').textContent = texto)
textElement ('Testando o texto')

//[4].Acesse o primeiroFilho a partir de pai.
const testeTexto = (teste) =>(document.querySelector('#pai').firstChild.textContent = teste)
testeTexto('Testando')

//[5].Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
/* console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling) */

//[6].Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const testeSibling =  (editTexto) => (document.querySelector('#elementoOndeVoceEsta').nextSibling.textContent = editTexto)
testeSibling('Antigo Atenção!')

//[7].Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

/* console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling) */

//[8].Agora acesse o terceiroFilho a partir de pai.

/* console.log(document.querySelector('#pai').lastElementChild.previousElementSibling) */

//Crie um irmão para elementoOndeVoceEsta.
    let pai = document.querySelector('#pai');
    /* let irmaoElementoOndeVoceEsta = document.createElement('section');
    pai.appendChild(irmaoElementoOndeVoceEsta);
    irmaoElementoOndeVoceEsta.id = 'irmãoDoElementoOndeVoceEsta' */

//Crie um filho para elementoOndeVoceEsta.
    /* let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
    let terceiroFilho = document.createElement('section');
    ondeVoceEsta.appendChild(terceiroFilho);
    terceiroFilho.id = 'terceiroFilho' */

//Crie um filho para primeiroFilhoDoFilho.
    /* let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
    let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
    filhoDoPrimeiroFilhoDoFilho.id = 'primeiroFilhoDoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);*/
//A partir desse filho criado, acesse terceiroFilho.
    /* console.log(document.querySelector('#primeiroFilhoDoPrimeiroFilhoDoFilho').parentNode.nextElementSibling.nextElementSibling) */
//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

    /* let familiaPai = document.querySelector('#pai').children;
    for(let i=familiaPai.length-1;i >=0;i-=1){
        console.log(familiaPai)
        let element = familiaPai[i];
        console.log(element)
        if(i > 1){
            pai.removeChild(element);
        }
    }console.log(familiaPai); */
