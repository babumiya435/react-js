import './App.css';
// import Button from './components/buttons/Button';
// import HelloWorld from './components/HelloWorld/HelloWorld';
// import Posts from './components/Posts/Posts';
// import Learning from './components/LearningContent/Learning';
import TikTokToe from './components/TikTokToe/TikTokToe'

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>
        <Posts />
      </div>
      {/* <div className='container mx-auto'>
        <Learning />
      </div> */}
      <div className='container mx-auto'>
        <TikTokToe/>
      </div>
    </div>
  );
}

export default App;
