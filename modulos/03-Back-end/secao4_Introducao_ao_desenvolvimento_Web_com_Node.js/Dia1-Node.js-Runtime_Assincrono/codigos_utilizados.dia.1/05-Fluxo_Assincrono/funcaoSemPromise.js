//?──── Tratando erros de forma síncrona ─────────────────────────────────────────────────
function calcularDivisao(num1, num2) {
  // dispara uma exceção, caso de falha da função
  if(num2 === 0) throw new Error('Não pode ser feita uma divisão por zero');

  // caso de sucesso da função
  const resultado = num1 / num2;
  return resultado;
};

//?──── exceção de um fluxo síncrono ──────────────────────────────────────────────────────
// para tratar a exceção de forma mais organizada usa-se o try, catch
try {
  //^ caso de sucesso cai aqui
  // const resultado = calcularDivisao(6, 2);
  const resultado = calcularDivisao(1, 0);
  console.log('Resultado: %s', resultado);
} catch (error) {
  //^ caso de exceção(erro) cai aqui 
  console.log('Error: %s', error.message);
}
