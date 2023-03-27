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
        <Button name="First Button from App.js" />
      </div>
      <div>
        <HelloWorld text ='Hello world text from App.js' />
      </div>
    </div>
  );
}

export default App;
