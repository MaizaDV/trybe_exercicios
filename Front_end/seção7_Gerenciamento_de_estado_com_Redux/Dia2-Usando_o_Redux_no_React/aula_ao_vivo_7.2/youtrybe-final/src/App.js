import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Player />
      <Sidebar />
    </div>
  );
}

export default App;
