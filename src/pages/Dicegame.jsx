import react from "react";


function Dice() {



    const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};

const updateScore = (selectedValue, achieved) => {
  score += parseInt(selectedValue);
  totalScoreElement.textContent = score;

  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (arr) => {
  const counts = {};

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let highestCount = 0;

  for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestCount) {
      highestCount = count;
    }
    if (count >= 4 && count > highestCount) {
      highestCount = count;
    }
  }

  const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDice);
  }

  if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDice);
  }

  updateRadioOption(5, 0);
};

const detectFullHouse = (arr) => {
  const counts = {};

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  const hasThreeOfAKind = Object.values(counts).includes(3);
  const hasPair = Object.values(counts).includes(2);

  if (hasThreeOfAKind && hasPair) {
    updateRadioOption(2, 25);
  }

  updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};

const resetGame = () => {
  diceValuesArr = [0, 0, 0, 0, 0];
  score = 0;
  round = 1;
  rolls = 0;

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });

  totalScoreElement.textContent = score;
  scoreHistory.innerHTML = "";

  rollsElement.textContent = rolls;
  roundElement.textContent = round;

  resetRadioOptions();
};

const checkForStraights = (arr) => {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1] || arr[-i - 1] === arr[i]) {
            count++;
            if (count === 5) {
                updateRadioOption(3, 30); 
                updateRadioOption(4, 40); 
            } else if (count === 4) {
                updateRadioOption(3, 30); 
            }
        } else {
            updateRadioOption(5, 0); 
        }
    }
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    resetRadioOptions();
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
    detectFullHouse(diceValuesArr);
    checkForStraights(diceValuesArr);
  }
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});

keepScoreBtn.addEventListener("click", () => {
  let selectedValue;
  let achieved;

  for (const radioButton of scoreInputs) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
      break;
    }
  }

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);
    if (round > 6) {
      setTimeout(() => {
        alert(`Game Over! Your total score is ${score}`);
        resetGame();
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});


    return(<>
    
    
    <header>
    <h1>Advanced Dice Game</h1>
    <button class="btn" id="rules-btn" type="button">Show rules</button>
    <div class="rules-container">
      <h2>Rules</h2>
      <ul>
        <li>There are total of six rounds</li>
        <li>You can only roll the dice three times per round</li>
        <li>To start the game, roll the dice</li>
        <li>
          Then, choose from one of the selected scores or roll the dice again
        </li>
        <li>
          If you choose a selected score, then you will move to the next round
        </li>
        <li>
          If you decline to choose a selected score, then you can roll the
          dice again two more times
        </li>
      </ul>
      <h2 class="points">Points</h2>
      <ul>
        <li>Three of a kind: Sum of all five dice</li>
        <li>Four of a kind: Sum of all five dice</li>
        <li>Full house: Three of a kind and a pair - 25 points</li>
        <li>
          Small straight: Four of the dice have consecutive values - 30 points
        </li>
        <li>
          Large straight: All five dice have consecutive values - 40 points
        </li>
      </ul>
    </div>
  </header>

  <main>
    <form id="game">
      <div id="dice">
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
      </div>

      <p class="rounds-text">
        <strong>Rolls:</strong> <span id="current-round-rolls">0</span> |
        <strong>Round:</strong> <span id="current-round">1</span>
      </p>

      <div id="score-options">
        <div>
          <input type="radio" name="score-options" id="three-of-a-kind" value="three-of-a-kind" disabled />
          <label for="three-of-a-kind">Three of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="four-of-a-kind" value="four-of-a-kind" disabled />
          <label for="four-of-a-kind">Four of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="full-house" value="full-house" disabled />
          <label for="full-house">Full house<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="small-straight" value="small-straight" disabled />
          <label for="small-straight">Small straight<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="large-straight" value="large-straight" disabled />
          <label for="large-straight">Large straight<span></span></label>
        </div>

        <div>
          <input type="radio" name="score-options" id="none" value="none" disabled />
          <label for="none">None of the above<span></span></label>
        </div>
      </div>

      <button class="btn" id="keep-score-btn" type="button">
        Keep the above selected score
      </button>
      <button class="btn" id="roll-dice-btn" type="button">
        Roll the dice
      </button>
    </form>

    <div id="scores">
      <h3>Score history (Total score: <span id="total-score">0</span>)</h3>
      <ol id="score-history"></ol>
    </div>
  </main>
    
    
    
    
    
    
    
    
    
    
    
    
    </>);
}

export default Dice;