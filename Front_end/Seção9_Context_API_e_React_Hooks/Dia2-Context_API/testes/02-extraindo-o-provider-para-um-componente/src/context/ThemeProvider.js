import React, { useState } from 'react';

import ThemeContext from './ThemeContext'

export default function ThemeProvider(props) {
  const { children } = props;

  const [ themeColor, setThemeColor ] = useState('dark'); // estado gerenciando qual o tema ativo na aplicação

  function toggleTheme() { // função que altera o theme da aplicação
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  };

  return (
    <ThemeContext.Provider
      value={ { color: themeColor, toggleTheme } }
    >
      <div className={`app ${ themeColor }`}>
        { children }
      </div>
    </ThemeContext.Provider>
  );
};
