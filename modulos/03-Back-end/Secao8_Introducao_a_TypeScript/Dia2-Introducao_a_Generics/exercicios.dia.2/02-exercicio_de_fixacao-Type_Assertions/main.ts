//──── Exercício 1 ───────────────────────────────────────────────────────────────────────

type Product = {
  barcode: string,
  price: number,
};

//──── Exercício 2 ───────────────────────────────────────────────────────────────────────
function getProduct(): Product {
  const product = {} as Product; // Adiciona Type Assertion
  product.barcode = '123c456b789a';
  return product;
}

console.log(getProduct());

//──── Exercício 3 ───────────────────────────────────────────────────────────────────────
// function getProduct3(): Product {
//   // Error: Property 'price' is missing in type '{ barcode: string; }' but required in type 'Product'.
//   const product: Product = { 
//     barcode: '123c456b789a',
//   };
//   return product;
// }

// console.log(getProduct3());

//──── Exercício 4 ───────────────────────────────────────────────────────────────────────
function getProduct4(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 5.0,
  };
  return product;
}

console.log(getProduct4());
