import { Animal, Bird, Mammal } from "./Animal";

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):
3
Tigre está andando!
*/

// const main = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }

// main(tiger);


const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/
