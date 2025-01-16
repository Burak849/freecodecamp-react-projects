import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import Calculator from './pages/Calculator';
import Clock from './pages/Clock';
import Drum from './pages/Drum';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
