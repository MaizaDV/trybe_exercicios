import './App.css';
import Image from './Image';
import GrayCat from './GrayCat.jpg'

function App() {
  return (
    <div className='img'>
      <Image source={ GrayCat } alternativeText='Gray cat' />
    </div>
  );
}

export default App;
