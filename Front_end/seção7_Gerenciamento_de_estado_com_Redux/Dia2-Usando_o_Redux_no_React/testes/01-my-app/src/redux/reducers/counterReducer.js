// ./src/redux/reducers/counterReducer.js
const INITIAL_STATE = {
  count: 0,
};

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;
