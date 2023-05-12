//?──── Tratando erros de forma assíncrona ────────────────────────────────────────────────
function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    //^ Caso de falha
    if(num1 === 0) reject(new Error('Não pode dividir um número por zero.'));
    
    //^ Caso de sucesso
    const resultado = num1 / num2;

    resolve(resultado);
  })

  return promise;
}

//?──── exceção de um fluxo assíncrono ──────────────────────────────────────────────────────
calcularDivisao(2, 0) 
  .then((result) => console.log(result))  //^ caso de sucesso cai aqui
  .catch((err) => console.log('Erro: %s', err.message));  //^ caso de exceção(erro) cai aqui
