import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

console.log('──── Exercício 3 ───────────────────────────────────────────────────────────────────────');

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('──── Exercício 4 ───────────────────────────────────────────────────────────────────────');
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
