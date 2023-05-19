const calculaSituacao = require('./calculaSituacao');

//? Exemplo de função de teste
// Utilizamos o log abaixo para “descrever” nosso cenários de teste.
console.log('Quando a média for menor que 7, retorna "reprovação":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
//────  ──────────────────────────────────────────────────────────────────────────────────

//? mesmo exemplo de função de teste, porém, estruturando testes com o Mocha
//* usando o describe podemos “descrever” nosso teste para o mesmo cenário do console.log acima:
describe('Quando a média for menor que 7', function () {
  //* Descrito nosso comportamento, vamos adicionar o que será testado de fato, ou seja, o que é esperado. Para isso, usamos o it:
  it('retorna "reprovação"', function () {
    //
  });
});

