
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

// ? Se você modificar o cloneObj, verá que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?

//? Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo.


const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};


//? apenas o objeto newPerson será modificado.
const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson.name);
console.log(person);
