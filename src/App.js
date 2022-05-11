import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import Home from './components/Home';
import KeyWord from './components/KeyWord';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/:value" element={<KeyWord/>}/>
    <Route path="/:word/:color" element={<ColorWord/>}/>
    

    </Routes>

    </BrowserRouter>
  );
}

export default App;
