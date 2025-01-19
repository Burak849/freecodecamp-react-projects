import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import Calculator from './pages/Calculator';
import Drum from './pages/Drum';
import Monster from './pages/Monster';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/monster" element={<Monster />} />
      </Routes>
    </Router>
  );
}

export default App;
