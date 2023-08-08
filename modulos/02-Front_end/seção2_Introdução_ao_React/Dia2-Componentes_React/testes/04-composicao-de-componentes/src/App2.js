// arquivo scr/App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

class App2 extends Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
      </div>
    );
  }
}

export default App2;
