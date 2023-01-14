import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HowTo from './components/HowTo';
import Profile from './components/Profile';

function App() {
  return (
      <BrowserRouter>
        {/* Se a minha url tiver o path= /about renderize esse componente */}
        <Route path="/about" component={ About } />
        <Route path="/howto" component={ HowTo } />
        <Route path="/profile" > <Profile /> </Route>
        <Route exact path="/" component={ Home } /> {/* o exact garante que o componente só irá renderizar se o path for exato */}
      </BrowserRouter>
  );
}

export default App;
