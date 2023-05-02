import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import Button from './components/buttons/Button';
// import HelloWorld from './components/HelloWorld/HelloWorld';
// import Posts from './components/Posts/Posts';
// import Learning from './components/LearningContent/Learning';
// import TikTokToe from './components/TikTokToe/TikTokToe';
import Login from './components/Basic/Login/Login';
import Home from './components/Basic/Home/Home';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <div className='container mx-auto'>
          <Posts />
        </div>
        <div className='container mx-auto'>
          <TikTokToe />
        </div>
      </div> */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
