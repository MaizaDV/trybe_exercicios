const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
//? como você faria para imprimir o valor de cada propriedade do objeto product?
console.log(Object.values(product));

// Uma forma seria acessar os valores utilizando a notação de objeto, como
console.log(product.name)
console.log('=> ---------------------');

//? acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto, ou object destructuring.
// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

const { name, seller } = product;

console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas
