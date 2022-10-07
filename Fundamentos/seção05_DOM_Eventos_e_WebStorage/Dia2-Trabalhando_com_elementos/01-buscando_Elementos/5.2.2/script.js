const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(document.getElementById('elementoOndeVoceEsta'), "acessa o elementoOndeVoceEsta");

const pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'red';
  console.log(elementoOndeVoceEsta.parentElement, "pai do elementoOndeVoceEsta");

const filhoDOelementoOndeVoceEsta = elementoOndeVoceEsta.firstElementChild;
  filhoDOelementoOndeVoceEsta.innerHTML = "primeiro filho do filho, filho = elementoOndeVoceEsta";

const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho, "primeiro filho do pai");

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho2, "acessa o primeiro filho do pai a partir do elementoOndeVoceEsta");

const atencaoTexto = elementoOndeVoceEsta.nextSibling;
console.log(atencaoTexto, "acessa o próximo nó(nextSibling) a partir do elementoOndeVoceEsta");

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho, "acessa o terceiro filho a partir do elementoOneVoceEsta");

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2, "acessa o terceiro filho a partir do pai");
