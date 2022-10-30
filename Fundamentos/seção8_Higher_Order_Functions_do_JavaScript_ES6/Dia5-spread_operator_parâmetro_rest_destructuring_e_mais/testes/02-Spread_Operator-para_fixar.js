// Faça uma lista com as suas frutas favoritas
const specialFruit = ['goiaba', 'morango', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['amora', 'kiwi', 'granola'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional] // fez o parâmetro usar speed operator
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));