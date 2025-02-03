import react from "react";

function Telephone(){

    const userInput = document.getElementById('user-input');
    const checkButton = document.getElementById('check-btn');
    const clearButton = document.getElementById('clear-btn');
    const result = document.getElementById('results-div');
    const phoneRegex = /^1?\s?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
    function resultStyle() {
        result.style.fontSize = "2em";
        result.style.fontWeight = "bold";
        result.style.textAlign = "center";
        result.style.marginTop = "1rem";
        result.style.backgroundColor = "#fff8dc";
        result.style.padding = "20px";
        result.style.borderRadius = "10px";
        result.style.boxShadow = "0 0 10px 0 #000";
        result.style.width = "50%";
        result.style.margin = "auto";
    }
    
    checkButton.addEventListener('click', () => {
        const userInputValue = userInput.value;
        result.style.display = "block";
        if (userInputValue.trim() === "") {
            alert("Please provide a phone number");
        } else if (phoneRegex.test(userInputValue)) {
            result.textContent = `Valid US number: ${userInputValue}`;
            result.style.color = "green";
            resultStyle();
        } else {
            result.textContent = `Invalid US Number: ${userInputValue}`;
            result.style.color = "red";
            resultStyle();
        }
    });
    
    clearButton.addEventListener('click', () => {
        userInput.value = "";
        result.textContent = "";
        result.style.display = "none";
    });
    return(<>


    <h1>Telephone Number Validator</h1>
    <div id="container">
        <input id="user-input"></input>
        <button type="button" id="check-btn">Check</button>
        <button id="clear-btn">Clear</button>
    </div>
    <div id="results-div"></div>

    </>);
}

export default Telephone;