import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import Display from './components/display';
import StyledWord from './components/styledWord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:input' element={<Display/>}/>
          <Route path='/:word/:fontColor/:backgroundColor' element={<StyledWord/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
