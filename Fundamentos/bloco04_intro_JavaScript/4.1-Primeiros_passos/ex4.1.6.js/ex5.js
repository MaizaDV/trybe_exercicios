const ladoA = 30;
const ladoB = 50;
const ladoC = 100;

let ladosPositivos = (ladoA > 0 && ladoB > 0 && ladoC > 0);

if (ladosPositivos === 180) {
    if (ladoA + ladoB + ladoC === 180) {
        console.log("true");
    } else {
        console.log("false");
    }
} else {
    console.log("Não é um número positivo")
}
