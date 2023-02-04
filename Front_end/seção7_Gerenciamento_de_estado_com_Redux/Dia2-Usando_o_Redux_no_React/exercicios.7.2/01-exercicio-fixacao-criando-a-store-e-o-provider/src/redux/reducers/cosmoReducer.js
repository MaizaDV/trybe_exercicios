import { RECEIVE_COSMO } from '../actions';

const INCREASE_COSMO = 10;

const INITIAL_STATE = {
  cosmo: 0,
};

const defeatSaga = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COSMO:
    return { cosmo: state.cosmo + INCREASE_COSMO };
  default:
    return state;
  }
};

export default defeatSaga;
