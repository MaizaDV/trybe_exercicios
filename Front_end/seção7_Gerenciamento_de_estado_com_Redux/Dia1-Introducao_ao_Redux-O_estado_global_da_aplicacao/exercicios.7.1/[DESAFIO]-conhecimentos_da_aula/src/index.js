const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
};
// ========== REDUCER ==========
const initialState = "?";
const reducer = (state = initialState, action) => {};

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
