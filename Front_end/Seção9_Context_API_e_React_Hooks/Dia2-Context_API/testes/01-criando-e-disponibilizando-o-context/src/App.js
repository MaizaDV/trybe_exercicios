import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

export default function App() {

  return (
      <div className='app light'>
        <Header />
        <Image />
        <Footer />
      </div>
  );
}
