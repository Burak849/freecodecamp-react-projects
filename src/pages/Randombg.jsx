import React, { useState } from 'react';
import '../App.css';

function Randombg() {
  
  const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];


  const [bgColor, setBgColor] = useState(darkColorsArr[0]);


  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }

  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    setBgColor(color);
  }

  return (
    <div className='sectclass' style={{backgroundColor: bgColor}}>
      <div className="bg-information-container">
        <p>Hex Code: <span id="bg-hex-code">{bgColor}</span></p>
      </div>
      <button className="buttonclass" style={{transition: 'background-color 0.3s ease'}} onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  );
}

export default Randombg;
