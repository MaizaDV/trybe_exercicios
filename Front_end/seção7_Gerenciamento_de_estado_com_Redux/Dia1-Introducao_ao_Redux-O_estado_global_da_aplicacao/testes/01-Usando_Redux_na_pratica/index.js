import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  return state;
};

const store = createStore(reducer); // para criar a store, precisa ser chamado o reducer

const incrementBtn = document.querySelector("button");
incrementBtn.addEventListener("click", () => {
  console.log("click");
})