import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

 // toda aplicação quando ela começa, tem um estado inicial, é o primeiro estado que começa com a aplicação
// ==> 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = { count: 0 };
console.log(INITIAL_STATE, 'INITIAL_STATE');

// reducer-função responsável por alterar o estado global
const reducer = (state = INITIAL_STATE, action) => {
  console.log(state, 'STATE do reducer antes da action');
  console.log('-------------->');

  if (action.type === 'INCREMENT_COUNTER') {
    console.log(state.count  + 1, 'STATE reducer da ACTION');
    console.log('-------------->');

    return { count: state.count + 1 };
  }
  return state;
};

// para criar a store, precisa ser chamado o reducer
// ==> 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());

// toda vez que a gente for chamar uma ação, a gente precisa passar para o reducer qual a ação que foi chamada, a ação precisa de um identificador para cada ação da nossa aplicação
// ==> 3. Criando a Action
const action = {type: 'INCREMENT_COUNTER'}

// ==> 4. Disparando a Action
const incrementBtn = document.querySelector("button");
incrementBtn.addEventListener("click", () => {
  store.dispatch(action); // dispara a action
})

// ==> 5. Lendo do Estado global
store.subscribe(() => {
  console.log('o estado foi alterado, SUBSCRIBE');
  const globalState = store.getState();
  console.log(globalState);
  console.log('-------------->');

  const countElement = document.querySelector('h2');
  countElement.innerHTML = globalState.count;
});
