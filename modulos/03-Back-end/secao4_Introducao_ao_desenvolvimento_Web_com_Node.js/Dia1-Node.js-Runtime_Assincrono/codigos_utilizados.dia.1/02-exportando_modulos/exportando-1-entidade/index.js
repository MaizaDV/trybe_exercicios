// Imagine que estamos exportando uma função, de modo que podemos utilizá-la para converter um valor em dólares para outro valor,neste caso em reais.

// importando a função usdToBrl
// podemos dar o nome que quisermos para a função depois que a importamos
const convert = require('./brlValue');

const usd = 10; // valor em dólar
const brl = convert(usd); // conversão para reais

console.log(brl);
