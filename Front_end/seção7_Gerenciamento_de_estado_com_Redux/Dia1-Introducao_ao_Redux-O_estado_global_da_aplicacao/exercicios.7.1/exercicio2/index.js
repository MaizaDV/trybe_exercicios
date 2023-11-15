const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_STATUS = 'CHANGE_STATUS';

const actionChangeStatus = () => {
  store.dispatch({ type: CHANGE_STATUS });
};

const actionChangeTheme = () => {
  store.dispatch({ type: CHANGE_THEME });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      const newStatus = state.status === 'offline' ? 'online' : 'offline';
      return {
        ...state, 
        status: newStatus 
      };

    case CHANGE_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { 
        ...state,
        theme: newTheme
      };

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const statusButton = document.getElementById('toggle-status');
statusButton.addEventListener('click', actionChangeStatus);

const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener('click', actionChangeTheme);

store.subscribe(() => {
  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  if (state.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (state.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
});
