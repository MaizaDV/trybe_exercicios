// const CHANGE_TO_DARK = 'CHANGE_TO_DARK';
// const CHANGE_TO_LIGHT = 'CHANGE_TO_LIGHT';
const CHANGE_TO_THEME = 'CHANGE_TO_THEME';

// actions e os dispatchs
// const actionChangeToDark = () => {
//   console.log('Clicou');
//   store.dispatch({ type: CHANGE_TO_DARK });
// };

const actionChangeTheme = () => {
  store.dispatch({ type: CHANGE_TO_THEME });
};

const toggleButton = document.querySelector('#light-switch');
toggleButton.addEventListener('click', actionChangeTheme);

// reducer e seu estado inicial
const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    // case CHANGE_TO_DARK:
    //   // Montar a minha atualização
    //   return { theme: 'dark' };
    // case CHANGE_TO_LIGHT:
    //   return { theme: 'light' };
    case CHANGE_TO_THEME:
      const newTheme =  state.theme === 'light' ? 'dark' : 'light';
      return { theme: newTheme };
      default:
      return state;
  }
};

// Eu estou criando a minha store para ser utilizada posteriormente.
const store = Redux.createStore(reducer); // local que vai ser armazenado.
// console.log(store);

// criação do Subscribe, para executar toda vida que um estado é atualizado dentro reducer/store
store.subscribe(() => {
  const { theme } = store.getState();
  console.log('subscribe', theme);
  document.querySelector('#wrapper').className = theme;
  document.querySelector('#light-bulb').src = `img/${theme}.png`;
});

