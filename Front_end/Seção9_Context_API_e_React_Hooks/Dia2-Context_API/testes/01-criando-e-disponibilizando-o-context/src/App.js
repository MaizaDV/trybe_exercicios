import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

export default function App() {
  const [ themeColor, setThemeColor ] = useState('dark'); // estado gerenciando qual o tema ativo na aplicação

  function toggleTheme() { // função que altera o thema da aplicação
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  };

  return (
    <ThemeContext.Provider value={ { color: themeColor, toggleTheme } }>{/* Passa as informações que vai usar, pelo provider, para os componentes filhos */}
      <div className={`app ${ themeColor }`}>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
