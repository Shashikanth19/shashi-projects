import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import SecondGreet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="John" heroName="Wick">
        <h2>How are you</h2>
      </Greet>
      <Greet name="Bob" heroName="Marley"/>
    </div>
  );
}

export default App;
