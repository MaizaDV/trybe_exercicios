import { isTaxID, isRgbColor, isEmail, isURL, isDate, isFloat } from 'validator';
import './style.css';

const text = document.querySelector('#text');
const button = document.querySelector('#btn');
const option = document.querySelector('#options');
const result = document.querySelector('#result');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const obj = {
    cpf: isTaxID(text.value, 'pt-BR'),
    rgb: isRgbColor(text.value),
    email: isEmail(text.value),
    url: isURL(text.value),
    date: isDate(text.value),
    float: isFloat(text.value, ['pt-BR']),
  };
  result.innerHTML = `A validação é ${obj[option.value]}`;
});

// console.log();
