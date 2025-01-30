import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import Calculator from './pages/Calculator';
import Drum from './pages/Drum';
//import Monster from './pages/Monster';
import Quote from './pages/Quote';
import Randombg from './pages/Randombg';
import Caloriecounter from './pages/Counter'
import RPSgame from './pages/RPSgame'
import Music from './pages/Music'
import Teams from './pages/Teams'
import Todoapp from './pages/Todo'
import BinaryConverter from './pages/BinaryConverter';
import SpamFinder from './pages/Spamfinder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/music" element={<Music />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/spamfinder" element={<SpamFinder />} />
        <Route path="/todoapp" element={<Todoapp />} />
        <Route path="/caloriecounter" element={<Caloriecounter />} />
        <Route path="/binaryconverter" element={<BinaryConverter />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/randombg" element={<Randombg />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/rockpaperscissor" element={<RPSgame />} />
      </Routes>
    </Router>
  );
}

//<Route path="/monster" element={<Monster />} />
export default App;
