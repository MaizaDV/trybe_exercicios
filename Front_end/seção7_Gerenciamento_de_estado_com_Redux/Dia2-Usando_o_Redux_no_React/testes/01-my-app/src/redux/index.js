import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = { count: 0 }; 

const reducer = (state = INITIAL_STATE, action) => state;
// {
//   switch (action.type) {
//     // case value:
      
//       // break;
  
//     default:
//       return state;
//   }
// };

const store = createStore(reducer, composeWithDevTools());

export default store;
