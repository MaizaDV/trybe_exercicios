const arrays = [ 'Ana', 'Pedro', 'Giovana', 'Manoel'];

arrays.filter((element, index, array) =>
  console.log(`Elemento: ${element}, Índice: ${index}, Array: ${array}`));