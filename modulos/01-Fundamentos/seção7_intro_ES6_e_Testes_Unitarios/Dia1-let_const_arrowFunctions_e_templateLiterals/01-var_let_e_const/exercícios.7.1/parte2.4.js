//? 1° função

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  return frase.replace(/x/, nome);
}
// console.log(substituaX('Bebeto'));


//? 2° função

const minhasSkills = (substituaX) => {
  const skills = ['css', ' javascript', ' git'];
  let result = `  ${substituaX}
  Minhas cinco principais habilidades são: ${skills}.`;
  return result;
}

console.log(minhasSkills(substituaX('Bebeto')));