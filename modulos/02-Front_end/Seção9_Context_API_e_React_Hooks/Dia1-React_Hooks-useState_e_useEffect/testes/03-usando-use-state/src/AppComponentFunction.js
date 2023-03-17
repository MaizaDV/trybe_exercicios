import { useState } from 'react';
import './App.css';

function AppComponentFunction() {
  
  const [ counter, setCounter ] = useState(0);

  return (
    <div>
        <div>Counter: { counter }</div>
        <button
          type="button"
          onClick={ () => setCounter(counter + 1) }
        >
          Increase Counter
        </button>
      </div>
  );
}

export default AppComponentFunction;
