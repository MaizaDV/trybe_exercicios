const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => callback; //? callback seria onde eu passo a arrow function

// Ao chamar a função doingThings:
console.log(doingThings(wakeUp()));
console.log(doingThings(breakFast()));
console.log(doingThings(sleep()));
console.log('-----------------------------');

// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

//todo outro modo de fazer!
const doingThings2 = (callback) => console.log(callback());

// Ao chamar a função doingThings2:
doingThings2(wakeUp);
doingThings2(breakFast);
doingThings2(sleep);
