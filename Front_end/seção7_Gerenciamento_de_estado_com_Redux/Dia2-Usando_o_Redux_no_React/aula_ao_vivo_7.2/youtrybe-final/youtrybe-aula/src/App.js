import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Player />
        <Sidebar />
      </div>
    );
  }
}

export default App;
