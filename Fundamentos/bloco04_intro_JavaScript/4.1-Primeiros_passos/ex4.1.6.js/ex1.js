// 1
const a = Math.floor(Math.random() * 10) + 1;
const b = Math.floor(Math.random() * 10) + 1;
console.log("Letra a = " + a + " Letra b = " + b );

console.log("Adição " + (a + b));
console.log("Subtração " + (a - b));
console.log("Multiplicação " + (a * b));
console.log("Divisão " + (a / b));
console.log("Módulo " + (a % b));

// 2
if (a > b) {
    console.log("A é maior que B.");
} else {
    console.log("B é mair que A.");
}