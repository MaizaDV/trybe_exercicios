let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let c = Math.floor(Math.random() * 10) + 1;

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

function maiorNum(a, b) {
	if (a > b) {
		return (a + " é maior que " + b);
	} if (a < b) {
		return (a + " é menor que " + b);
	} else {
		return ("São iguais");
	}
}
console.log(maiorNum(a, b));

function maiorNumDeTres(a, b, c) {
	if (a > b && a > c) {
		return (a + " é maior que " + b + ", " + c);
	} else if (b > a && b > c) {
		return (b + " é maior que " + a + ", " + c);
	} else if (c > a && c > b) {
		return (c + " é maior que " + a + ", " + b);
	} else {
		return ("São iguais");
	}
}
console.log(maiorNumDeTres(a, b, c));
