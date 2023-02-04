// ./src/redux/actions/index.js

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const INCREMENT_CLICK = 'INCREMENT_CLICK';

export const actionCreator = (increment = 1) => ({ 
  type: INCREMENT_COUNTER,
  payload: increment,
});

export const clickCounter = () => ({
  type: INCREMENT_CLICK,
});

