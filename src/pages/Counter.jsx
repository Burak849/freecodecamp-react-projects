//BURASI DA DUZENLENECEK
import React from 'react';
import '../App.css';

function Caloriecounter() {

  const calorieCounter = document.getElementById('calorie-counter');
  const budgetNumberInput = document.getElementById('budget');
  const entryDropdown = document.getElementById('entry-dropdown');
  const addEntryButton = document.getElementById('add-entry');
  const clearButton = document.getElementById('clear');
  const output = document.getElementById('output');
  let isError = false;
  
  function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
  }
  
  function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
  }
  
  function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
  }
  
  function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;
  
    output.classList.remove('hide');
  }
  
  function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
      calories += Number(currVal);
    }
    return calories;
  }
  
  function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
    for (const container of inputContainers) {
      container.innerHTML = '';
    }
  
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
  }
  
  addEntryButton.addEventListener("click", addEntry);
  calorieCounter.addEventListener("submit", calculateCalories);
  clearButton.addEventListener('click',clearForm);

  return (
    <section className='sectionclass'>

<h1>Calorie Counter</h1>
      <div class="container">
        <form id="calorie-counter">
          <label for="budget">Budget</label>
          <input
            type="number"
            min="0"
            id="budget"
            placeholder="Daily calorie budget"
            required
          />
          <fieldset id="breakfast">
            <legend>Breakfast</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="lunch">
            <legend>Lunch</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="dinner">
            <legend>Dinner</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="snacks">
            <legend>Snacks</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="exercise">
            <legend>Exercise</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>
        <div id="output" class="output hide"></div>
      </div>
    </section>
  );
}

export default Caloriecounter;
