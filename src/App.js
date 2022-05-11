import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/:number" element={<Number/>}/>
    <Route path="/:word" element={<Word/>}/>
    <Route path="/:word/:color" element={<ColorWord/>}/>
    

    </Routes>

    </BrowserRouter>
  );
}

export default App;
