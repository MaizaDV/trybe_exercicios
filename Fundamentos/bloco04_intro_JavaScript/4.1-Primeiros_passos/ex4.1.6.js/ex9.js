const a = Math.floor(Math.random() * 10) + 1
const b = Math.floor(Math.random() * 10) + 1
const c = Math.floor(Math.random() * 10) + 1

let impar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    impar = true;
}
console.log(impar)