//todo Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array. 

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

//todo Em português, é como se significasse Verifique se cada elemento do meu array é múltiplo de 2.

arrayOfValues.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divisível por 2!`);
  }
});

//todo Encontre o primeiro elemento de meuArray que é múltiplo de cinco.
arrayOfValues.find((elemento) => {
  if(elemento % 5 === 0) {
    console.log(`${elemento} é divisível por 5!`)
  }
});

//! Observe abaixo que podemos passar mais de um parâmetro para a função também. As HOFs disponibilizam para você, caso precisar, acesso a mais informações do array:
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('=> ---------------');
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
