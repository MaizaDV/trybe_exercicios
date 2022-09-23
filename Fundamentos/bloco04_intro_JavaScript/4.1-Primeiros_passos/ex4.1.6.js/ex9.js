const a = Math.floor(Math.random() * 10) + 1
const b = Math.floor(Math.random() * 10) + 1
const c = Math.floor(Math.random() * 10) + 1

let impar = false;

if ((a % 2 === 1 || b % 2 === 1 || c % 2 === 1)) {
    impar = true;
}
console.log(impar);
console.log(a, b, c);