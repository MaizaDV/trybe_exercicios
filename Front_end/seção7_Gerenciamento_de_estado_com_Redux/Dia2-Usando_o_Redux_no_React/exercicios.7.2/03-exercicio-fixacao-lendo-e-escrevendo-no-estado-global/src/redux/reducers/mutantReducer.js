import { GET_MUTANT, SHOW_MUTANT } from '../actions';

const INITIAL_STATE = {
  show: false,
  mutant: 'Absalon Mercator (Mister M)',
};

const mutantChosen = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MUTANT:
      return { ...state, mutant: action.mutant };
    case SHOW_MUTANT:
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export default mutantChosen;
