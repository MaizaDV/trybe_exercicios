//? este usa o localStorage ao recarregar a página
// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// const insertPhraseInDOM = () => {
//   const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// const addPhraseToLocalStorage = () => {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   localStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// const initialRendering = () => {
//   if (localStorage.getItem('phrases') === null) {
//     localStorage.setItem('phrases', JSON.stringify([]));
//   } else {
//     const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = phrasesList.length - 1;
//     for (let index = 0; index <= listLength; index += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = phrasesList[index];
//       list.appendChild(listElement);
//     }
//   }
// }

// button.addEventListener('click', addPhraseToLocalStorage);

// window.onload = () => initialRendering();

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

const addPhraseToSessionStorage = () => {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);
