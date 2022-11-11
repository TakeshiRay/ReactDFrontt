import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/Home/About/About';
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Home/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
