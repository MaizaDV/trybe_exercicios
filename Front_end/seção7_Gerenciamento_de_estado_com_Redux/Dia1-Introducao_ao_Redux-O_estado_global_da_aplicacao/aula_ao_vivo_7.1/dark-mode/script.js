const CHANGE_TO_DARK = 'CHANGE_TO_DARK';

// actions e os dispatchs
const actionChangeToDark = () => {
  console.log('Clicou');
  store.dispatch({ type: CHANGE_TO_DARK });
};

const toggleButton = document.querySelector('#light-switch');
toggleButton.addEventListener('click', actionChangeToDark);

// reducer e seu estado inicial
const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case CHANGE_TO_DARK:
      // Montar a minha atualização
      return { theme: 'dark' };
  
    default:
      return state;
  }
};

// Eu estou criando a minha store para ser utilizada posteriormente.
const store = Redux.createStore(reducer); // local que vai ser armazenado.
// console.log(store);

