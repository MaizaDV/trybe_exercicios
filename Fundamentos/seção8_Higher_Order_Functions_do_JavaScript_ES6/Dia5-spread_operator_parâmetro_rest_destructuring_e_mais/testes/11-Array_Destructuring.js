//* acessar valores do array, sem array destructuring.
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
console.log('=> ---------------------');


//* acessar valores do array, com array destructuring.
const [firstCountry2, secondCountry2, thirdCountry2, fourthCountry2] = arrayCountries;

console.log(firstCountry2); // Brazil
console.log(secondCountry2); // Japan
console.log(thirdCountry2); // China
console.log(fourthCountry2); // Canada

