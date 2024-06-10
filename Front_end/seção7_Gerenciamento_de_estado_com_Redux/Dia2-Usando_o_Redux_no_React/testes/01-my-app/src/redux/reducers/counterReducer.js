// ./src/redux/reducers/counterReducer.js
const INITIAL_STATE = {
  clicks: 0,
  count: 0,
};

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const INCREMENT_CLICK = 'INCREMENT_CLICK';

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case INCREMENT_CLICK:
      return {
        ...state,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}

export default counterReducer;
