// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {  // 01
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener("click", (event) => { // 02 com padrões estabelecidos é possível cancelar sua execução.
  event.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', (event) => {  // 03 event.key captura qual tecla foi pressionada e então submete o caractere a uma condição.
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
});
