const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator); // Como não realizamos sua execução, ela não seguiu os procedimentos para retornar um número aleatório. Para executarmos a função, teríamos que inserir () na frente do numberGenerator.

// ! Essa lógica é a mesma quando usamos callback dentro de outras funções.
//!  o fato de o JavaScript tratar funções como cidadãs de primeira classe nos permite inseri-las em variáveis.
