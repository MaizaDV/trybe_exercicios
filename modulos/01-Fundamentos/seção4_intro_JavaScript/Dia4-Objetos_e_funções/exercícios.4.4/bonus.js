let numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  let tamanhoNumero = numero.length;
  let soma = numerosRomanos[numero[tamanhoNumero - 1]]; //inicia com o valor do último algarismo romano.
  let atual = numerosRomanos[numero[tamanhoNumero - 1]]; // auxilia na conta dos loops

  for (let i = 2; i <= tamanhoNumero; i += 1) {
    const prox = numerosRomanos[numero[tamanhoNumero - i]]; // valor anterior
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
      }
  atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4