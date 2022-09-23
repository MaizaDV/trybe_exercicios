let porcentagemNota = Math.floor(Math.random() * 100) + 1;

if (porcentagemNota >= 90) {
    console.log(porcentagemNota + "% = A");
} else if (porcentagemNota >= 80) {
    console.log(porcentagemNota + "% = B");
} else if (porcentagemNota >= 70) {
    console.log(porcentagemNota + "% = C")
} else if (porcentagemNota >= 60) {
    console.log(porcentagemNota + "% = D")
} else if (porcentagemNota >= 50) {
    console.log(porcentagemNota + "% = E")
} else if (porcentagemNota < 50) {
    console.log(porcentagemNota + "% = F")
} else if (porcentagemNota < 0 || porcentagemNota > 100) {
    console.log("[ERRO!]")
}