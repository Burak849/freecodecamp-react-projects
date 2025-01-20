import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import Calculator from './pages/Calculator';
import Drum from './pages/Drum';
//import Monster from './pages/Monster';
import Quote from './pages/Quote';
import Randombg from './pages/Randombg';
import Caloriecounter from './pages/Counter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/caloriecounter" element={<Caloriecounter />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/randombg" element={<Randombg />} />
      </Routes>
    </Router>
  );
}

//<Route path="/monster" element={<Monster />} />
export default App;
