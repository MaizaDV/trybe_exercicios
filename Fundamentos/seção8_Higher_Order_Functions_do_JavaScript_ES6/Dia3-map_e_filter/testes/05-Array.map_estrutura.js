const arrays = [ 'Ana', 'Pedro', 'Giovana', 'Manoel' ];

arrays.map((element, index, array) =>
  console.log(`Elemento: ${element}, Índice: ${index}, Array: ${array}`));

//! o map percorre todos os elementos do array, retorna um novo array, do mesmo tamanho do original. 
//! Sempre devolve um array do tamanho original.
