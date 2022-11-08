import { nanoid } from "nanoid";

// console.log(randomPassword) //* outro modo de chamar a função!
// console.log(nanoid());

// alert('Hello World!');

const passwordBtnEl = document.querySelector('button');

const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
