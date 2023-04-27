function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

//^ Qualquer outra função que retorne uma Promise deve ser definida como async
//^ Toda função na qual utilizamos async, passa automaticamente a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.
// Contudo, quando você chama a função dividirNumeros com o prefixo await, a execução irá esperar até que a Promise seja resolvida ou rejeitada.
const doSomething = async () => {
  console.log(await dividirNumeros(2,2));
};
