let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = contador = maiorValor = 0;

for (let i =0; i < numbers.length; i += 1) {
    soma += numbers[i];
    contador += 1;
    if(numbers[i] >= maiorValor) {
        maiorValor = numbers[i];
    }
} if (soma/contador > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valoer menor ou igual a 20");
}
console.log("Soma dos valores da array: " + soma);
console.log("A média aritmética do array: " + soma / contador);
console.log("Maior valor da array: " + maiorValor);