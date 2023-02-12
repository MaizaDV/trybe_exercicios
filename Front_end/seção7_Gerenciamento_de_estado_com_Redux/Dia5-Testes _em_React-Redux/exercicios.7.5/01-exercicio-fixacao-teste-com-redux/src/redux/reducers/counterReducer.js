const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
