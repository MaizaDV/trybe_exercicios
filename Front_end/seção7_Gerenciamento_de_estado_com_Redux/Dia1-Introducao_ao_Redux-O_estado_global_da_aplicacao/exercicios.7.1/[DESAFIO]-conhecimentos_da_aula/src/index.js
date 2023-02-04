const showCountValue = (counter) => {
  // console.log(Object.values(counter));
  const h1Element = document.getElementById("counter");
  h1Element.innerText = Object.values(counter);
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  const action = { type: INCREMENTO };
  //store.???
  store.dispatch(action);
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  const action = { type: DECREMENTO };
  //store.???
  store.dispatch(action);
};
// ========== REDUCER ==========
const initialState = { counter: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return { counter: state.counter + 1 };
  
    case DECREMENTO:
      return { counter: state.counter - 1 }
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
