import logo from './logo.svg';
import './App.css';
import Button from './components/buttons/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
  return (
    <div className="App">
      <div>
        Hello Sameer
      </div>
      <div>
        <Button />
      </div>
      <div>
        <HelloWorld />
      </div>
    </div>
  );
}

export default App;
