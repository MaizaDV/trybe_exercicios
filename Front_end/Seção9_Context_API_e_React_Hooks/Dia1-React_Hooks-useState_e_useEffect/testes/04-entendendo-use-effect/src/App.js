import User from './components/User'
import './App.css'

function App() {
  const user ={
    name: 'Roberto',
    age: 19,
  }

  return (
    <div>
      <User name={ user.name } age={ user.age } />
    </div>
  );
}

export default App;
