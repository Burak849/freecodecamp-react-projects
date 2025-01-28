import React from "react";
import "../App.css";

function BinaryConverter() {

    const numberInput = document.getElementById("number-input");
    const convertBtn = document.getElementById("convert-btn");
    const result = document.getElementById("result");
    
    const decimalToBinary = (input) => {
      const inputs = [];
      const quotients = [];
      const remainders = [];
    
      if (input === 0) {
        result.innerText = "0";
        return;
      }
    
      while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
    
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
      }
    
      console.log("Inputs: ", inputs);
      console.log("Quotients: ", quotients);
      console.log("Remainders: ", remainders);
    
      result.innerText = remainders.reverse().join("");
    };
    
    const checkUserInput = () => {
      if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
      ) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
      }
    
      decimalToBinary(parseInt(numberInput.value));
      numberInput.value = "";
    };
    
    convertBtn.addEventListener("click", checkUserInput);
    
    numberInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkUserInput();
      }
    });


  return (
    <section>
      
      <h1>
      Decimal to Binary <br />
      Converter
    </h1>
    <article class="input-container">
      <label for="number-input">Enter a decimal number:</label>
      <input
        value=""
        type="number"
        name="decimal number input"
        id="number-input"
        class="number-input"
      />
      <button class="convert-btn" id="convert-btn">Convert</button>
    </article>
    <article class="output-container">
      <output id="result" for="number-input"></output>
      <h2>Call stack</h2>
      <div id="animation-container"></div>
    </article>


    </section>
  );
}

export default BinaryConverter;
