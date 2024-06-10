const INITIAL_STATE = {
  userName: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return { userName: action.payload.userName };
    default:
      return state;
  }
}

export default userReducer;
