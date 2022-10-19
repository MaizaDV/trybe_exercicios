
const custo = 20;
const valorVenda = 50;
let custoImposto = ((20 * custo) / 100); 
let custoTotal = custo + custoImposto;

if (custoTotal > 0 && valorVenda > 0) {
    let lucro = (valorVenda - custoTotal) * 1000
    console.log("O lucro será de " + lucro)
} else {
    console.log("[ERRO!]");
}
