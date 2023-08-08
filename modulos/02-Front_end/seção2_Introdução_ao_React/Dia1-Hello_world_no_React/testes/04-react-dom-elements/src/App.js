// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import './App.css';
import HelloWorld  from './HelloWorld';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
      {/* exemplo de className usado em CSS no React */}
      <span className='HelloWorld'>Hello, World!</span>
      <br/>
      {/* Novo componente criado */}
      <HelloWorld />
    </div>
  );
}

export default App;
