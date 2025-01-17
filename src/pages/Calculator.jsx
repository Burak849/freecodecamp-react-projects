import React, { useState } from "react";
import "../App.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState("");
  const [clickedOperators, setClickedOperators] = useState([]);
  const [resultDisplayed, setResultDisplayed] = useState(false);
  const [clickedNumbers, setClickedNumbers] = useState([]);

  const calculate = (a, b, operator) => {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return 0;
    }
  };

  const handleNumber = (value) => {
    setCurrentInput((prev) => (resultDisplayed || prev === "0" ? value : prev + value));
    setResultDisplayed(false);
    setClickedNumbers((prev) => [...prev, value]);
    setDisplay((prev) => (resultDisplayed ? value : prev + value));
  };

  const handleDecimal = () => {
    if (!currentInput.includes(".")) {
      setCurrentInput((prev) => prev + ".");
      setDisplay((prev) => prev + ".");
    }
  };

  const handleOperator = (value) => {
    if (currentInput && !resultDisplayed) {
      if (operator) {
        const result = calculate(previousInput, currentInput, operator);
        setPreviousInput(result.toString());
        setDisplay(result.toString());
      } else {
        setPreviousInput(currentInput);
      }
      setCurrentInput("");
    }
    setOperator(value);
    setClickedOperators((prev) => [...prev, value]);
    setResultDisplayed(false);
  };

  const handleEquals = () => {
    if (currentInput && previousInput && operator) {
      const result = calculate(previousInput, currentInput, operator);
      setDisplay(result.toString());
      setPreviousInput(result.toString());
      setCurrentInput("");
      setOperator("");
      setResultDisplayed(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setCurrentInput("");
    setPreviousInput("");
    setOperator("");
    setClickedNumbers([]);
    setClickedOperators([]);
    setResultDisplayed(false);
  };

  return (
    <section className="sectionclass" style={{ display: "flex" }}>
      <div className="calculator">
        <div id="display" className="calculatorscreen">
          {display}
          <div style={{ marginBottom: '2rem', marginLeft: '2rem' }}>
            {clickedNumbers.join(" ")}{clickedOperators.join(" ")}
          </div>

        </div>
        <div className="button-container">
          <button className="buttonclass" id="clear" onClick={handleClear}>
            AC
          </button>
          <button className="buttonclass" id="divide" onClick={() => handleOperator("/")}>
            /
          </button>
          <button className="buttonclass" id="multiply" onClick={() => handleOperator("*")}>
            *
          </button>
          <button className="buttonclass" id="seven" onClick={() => handleNumber("7")}>
            7
          </button>
          <button className="buttonclass" id="eight" onClick={() => handleNumber("8")}>
            8
          </button>
          <button className="buttonclass" id="nine" onClick={() => handleNumber("9")}>
            9
          </button>
          <button className="buttonclass" id="four" onClick={() => handleNumber("4")}>
            4
          </button>
          <button className="buttonclass" id="five" onClick={() => handleNumber("5")}>
            5
          </button>
          <button className="buttonclass" id="six" onClick={() => handleNumber("6")}>
            6
          </button>
          <button className="buttonclass" id="one" onClick={() => handleNumber("1")}>
            1
          </button>
          <button className="buttonclass" id="two" onClick={() => handleNumber("2")}>
            2
          </button>
          <button className="buttonclass" id="three" onClick={() => handleNumber("3")}>
            3
          </button>
          <button className="buttonclass" id="subtract" onClick={() => handleOperator("-")}>
            -
          </button>
          <button className="buttonclass" id="zero" onClick={() => handleNumber("0")}>
            0
          </button>
          <button className="buttonclass" id="equals" onClick={handleEquals}>
            =
          </button>
          <button className="buttonclass" id="decimal" onClick={handleDecimal}>
            .
          </button>
          <button className="buttonclass" id="add" onClick={() => handleOperator("+")}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
