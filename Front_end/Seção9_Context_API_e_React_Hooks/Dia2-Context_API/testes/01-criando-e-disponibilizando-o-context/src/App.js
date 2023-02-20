import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

export default function App() {
  const [ themeColor, setThemeColor ] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'ligth' : 'dark')
  };

  return (
    <ThemeContext.Provider value={ { color: themeColor, toggleTheme } }>
      <div className='app light'>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
