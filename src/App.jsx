import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import icon from './asset/image/dekcom-icon.jpg'
import thumbnail from './asset/image/dekcom-thumbnail.jpg'
import Home from './contexts/Home';

function App() {
    return (
        <>
          {/* <div className='flex flex-col w-full h-screen justify-center items-center bg-background-home'>
              <img className='flex w-full' src={thumbnail}/>
          </div> */}
          <Home/>
        </>
    );
}

export default App;
