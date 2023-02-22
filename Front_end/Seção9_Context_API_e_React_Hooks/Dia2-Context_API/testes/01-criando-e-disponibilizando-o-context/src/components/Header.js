import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <h1>Trybe</h1>
      <button onClick={() => theme.toggleTheme()}>
      { theme.color === 'dark' ? '☀️' : '🌒' }
      </button>
    </header>
  );
}

export default Header;
