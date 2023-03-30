import './App.css';
// import Button from './components/buttons/Button';
// import HelloWorld from './components/HelloWorld/HelloWorld';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      {/* <div>
        Hello Sameer
      </div>
      <div>
        <Button name="First Button from App.js" />
      </div>
      <div>
        <HelloWorld text ='Hello world text from App.js' />
      </div> */}
      <div className='container mx-auto'>
        <Posts />
      </div>
    </div>
  );
}

export default App;
