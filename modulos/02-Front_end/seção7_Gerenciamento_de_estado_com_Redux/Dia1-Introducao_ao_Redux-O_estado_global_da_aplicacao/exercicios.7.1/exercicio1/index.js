const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// Actions
const actionNextColor = () => {
  store.dispatch({ type: NEXT_COLOR });
};

const actionPrevColor = () => {
  store.dispatch({ type: PREVIOUS_COLOR });
};

const actionRandomColor = () => {
  store.dispatch({ type: RANDOM_COLOR });
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// Criando uma função Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [ ...state.colors, criarCor() ],
        index: state.colors.length,
      }
    default:
      return state;
  }
}

// Criando a store:
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors, index);
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});

const btnNextColor = document.querySelector('#next');
btnNextColor.addEventListener('click', actionNextColor);

const btnPrevColor = document.querySelector('#previous');
btnPrevColor.addEventListener('click', actionPrevColor);

const btnRandomColor = document.querySelector('#randomColor');
btnRandomColor.addEventListener('click', actionRandomColor);
