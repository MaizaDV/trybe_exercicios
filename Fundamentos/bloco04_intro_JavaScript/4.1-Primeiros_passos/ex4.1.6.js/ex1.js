// 1
const a = Math.floor(Math.random() * 10) + 1;
const b = Math.floor(Math.random() * 10) + 1;
console.log("Letra A = " + a + " Letra B = " + b );

console.log("Adição " + (a + b));
console.log("Subtração " + (a - b));
console.log("Multiplicação " + (a * b));
console.log("Divisão " + (a / b));
console.log("Módulo " + (a % b));

// 2
if (a > b) {
    console.log("A é maior que B.");
} else {
    console.log("B é maior que A.");
}

// 3
const c = Math.floor(Math.random() * 10) + 1;
console.log("Letra C = " + c);
if (a > b && a > c) {
    console.log("A é maior que B e C");
} else if (b > a && b > c) {
    console.log("B é maior que A e c");
} else {
    console.log("C é maior que A e B");
}