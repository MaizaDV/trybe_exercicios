const a = Math.floor(Math.random() * 10) + 1
const b = Math.floor(Math.random() * 10) + 1
const c = Math.floor(Math.random() * 10) + 1

let par = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    par = true;
}
console.log(par)