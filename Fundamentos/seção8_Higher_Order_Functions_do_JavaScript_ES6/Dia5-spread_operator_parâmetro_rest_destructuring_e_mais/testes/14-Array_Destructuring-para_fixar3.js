let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares; // usa os números depois do index 2 desse array, ele pula casas com a , (virgula)

console.log(numerosPares); // [6, 8, 10, 12];
