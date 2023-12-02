//? transformar todos os números em negativos e passá-los para um array novo.
const numbers = [1, 2, 3, 4, -5];
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
console.log('=> ------------------------------');


//todo map

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]

console.log('=> ------------------------------');
//todo for

const negativeNumbers2 = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers2.push(numbers[index] * -1);
  } else {
    negativeNumbers2.push(numbers[index]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
