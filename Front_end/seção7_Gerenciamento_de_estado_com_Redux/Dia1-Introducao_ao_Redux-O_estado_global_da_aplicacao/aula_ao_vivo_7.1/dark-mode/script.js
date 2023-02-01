const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  return state;
};

// Eu estou criando a minha store para ser utilizada posteriormente.
const store = Redux.createStore(reducer); // local que vai ser armazenado.

console.log(store);
