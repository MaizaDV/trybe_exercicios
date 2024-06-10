import React from 'react';
import './App.css';
import SelectOmega from './components/SelectOmega';

class App extends React.Component {
  render() {
    return (
      <div className="omega-background">
        <SelectOmega />
      </div>
    );
  }
}

export default App;
