let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;

function adição(a, b) {
	return a + b;
};
console.log("Adição: " + a + " + " + b + " = " + adição(a, b));

function subtração(a, b) {
	return a - b;
}
console.log("Subtração: " + a + " - " + b + " = " + subtração(a, b));

function multiplicação(a, b) {
	return a * b;
}
console.log("Multiplicação: " + a + " x " + b + " = " + multiplicação(a, b));

function divisão(a, b) {
	return a / b;
}
console.log("Divisão: " + a + " / " + b + " = " + divisão(a, b));

function módulo(a, b) {
	return a % b;
}
console.log("Módulo: " + a + " % " + b + " = " + módulo(a, b));