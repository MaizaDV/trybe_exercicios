const employee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com` };
}

const newEmployees = (name) => {
  const employees = {
    id1: name, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: name, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: name, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// ? retorna cada objeto individualmente 
console.log(newEmployees(employee('Pedro Guerra')).id1);
console.log(newEmployees(employee('Luiza Drumond')).id2);
console.log(newEmployees(employee('Carla Paiva')).id3);

// //? outro modo de fazer!
// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };
// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };
// console.log(newEmployees(employeeGenerator)); // retorna um objeto com uma lista de objetos
