let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = contador = maiorValor = numeroImpar = 0;
let menorValor = numbers[0]

for (let i =0; i < numbers.length; i += 1) {
    soma += numbers[i];
    contador += 1;
    if (numbers[i] % 2 !== 0) {
        numeroImpar += 1;
        if (numeroImpar === 0) {
            console.log("Nenhum valor ímpar encontrado")
        };
    } else if (numbers[i] >= maiorValor) {
        maiorValor = numbers[i];
    } else if (numbers[i] <= menorValor) {
        menorValor = numbers[i];
        console.log("O menor valor encontrado: " + menorValor);
    };
} if (soma/contador > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20");
};
console.log("Soma dos valores da array: " + soma);
console.log("A média aritmética do array: " + soma / contador);
console.log("Maior valor da array: " + maiorValor);
console.log("O menor valor encontrado: " + menorValor);
console.log("Existem " + numeroImpar + " números ímpares nessa array.");

let numeros= [];

for (let i = 1; i <= 25; i += 1) {
    numeros.push(i);
}
console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
};
