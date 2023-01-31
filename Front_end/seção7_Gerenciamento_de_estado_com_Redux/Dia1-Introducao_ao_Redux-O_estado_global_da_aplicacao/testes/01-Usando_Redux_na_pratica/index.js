import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

 // toda aplicação quando ela começa, tem um estado inicial, é o primeiro estado que começa com a aplicação
const INITIAL_STATE = { count: 0 };

// reducer-função responsável por alterar o estado global
const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    console.log(state);
    return { count: state.count + 1 };
  }
  return state;
};

// para criar a store, precisa ser chamado o reducer
const store = createStore(reducer, composeWithDevTools());

// toda vez que a gente for chamar uma ação, a gente precisa passar para o reducer qual a ação que foi chamada, a ação precisa de um identificador para cada ação da nossa aplicação
const action = {type: 'INCREMENT_COUNTER'}

const incrementBtn = document.querySelector("button");
incrementBtn.addEventListener("click", () => {
  store.dispatch(action); // dispara a action
})
