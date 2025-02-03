import react from "react";

function CashRegister(){


    let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let cash = 0;

const cashBtn = document.getElementById("purchase-btn");
const priceBtn = document.getElementById("price-btn");
const total = document.getElementById("total");
const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const priceInput = document.getElementById("price");

const moneyValue = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

cashBtn.addEventListener("click", () => {
  cash = Number(cashInput.value);
  console.log(`Cash from customer: $${cash}`);
  checkPrice();
});

priceBtn.addEventListener("click", () => {
  price = Number(priceInput.value);
  updateTotal();
  console.log(`Price in store: $${price}`);
});

const updateTotal = () => {
  total.innerHTML = `Total: $${price}`;
};

const checkPrice = () => {
  let registerMessage = ``;
  let totalCashInRegister = cid.reduce((sum, e) => sum + e[1], 0);
  console.log(`Total cash in register: $${totalCashInRegister}`);
  console.log(`Cash: $${cash}`);
  console.log(`Price: $${price}`);

  if (price > cash) {
    alert("Customer does not have enough money to purchase the item");
  } else if (price === cash) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    alert("No change due - customer paid with exact cash");
  } else {
    let change = cash - price;
    let change2 = change;

    if (totalCashInRegister < change) {
      changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
      return;
    }

    for (let i = cid.length - 1; i >= 0; i--) {
      console.log(`Change to give back: $${change}`);
      let temp = changeCount(change, moneyValue[i][1], i);
      change = temp[0];
      registerMessage += temp[1];
      console.log(`Remaining change: $${change}`);
    }

    if (change === 0 && totalCashInRegister === change2) {
      changeDue.innerHTML = `Status: CLOSED ${registerMessage}`;
    } else if (change === 0) {
      changeDue.innerHTML = `Status: OPEN ${registerMessage}`;
    } else {
      changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
    }
  }
};


const changeCount = (change, cashType, cidPlace) => {
  let registerMessage = '';
  const valueOfCashTypeInRegister = cid[cidPlace][1];
  const amountOfCashTypeInRegister = valueOfCashTypeInRegister / cashType;
  const amountOfCashTypeInChange = Math.floor(change / cashType);

  console.log(`Amount of ${cid[cidPlace][0]} in change: ${amountOfCashTypeInChange}`);
  console.log(`Amount of ${cid[cidPlace][0]} in register: ${amountOfCashTypeInRegister}`);
  console.log(`Value of ${cid[cidPlace][0]} in register: $${valueOfCashTypeInRegister}`);

  if (amountOfCashTypeInRegister > amountOfCashTypeInChange) {
    change = change - cashType * amountOfCashTypeInChange;
    if (cashType * amountOfCashTypeInChange !== 0) {
      registerMessage += `${cid[cidPlace][0]}: $${cashType * amountOfCashTypeInChange} `;
    }
  } else {
    change = change - cashType * amountOfCashTypeInRegister;
    if (cashType * amountOfCashTypeInRegister !== 0) {
      registerMessage += `${cid[cidPlace][0]}: $${cashType * amountOfCashTypeInRegister} `;
    }
  }

  change = Number(change.toFixed(2));
  console.log(`Change remaining: $${change}`);

  return [change, registerMessage];
};
    return (<>
    
    <h2>Cash Register Project</h2>
    <div id="change-due"></div>
    <div id="customer-part">
      <label for="cash">Enter cash from customer:</label>
      <input id="cash" type="number" />
      <button id="purchase-btn">Purchase</button>
      <label for="price">Enter purchase price:</label>
      <input id="price" type="number" />
      <button id="price-btn">Change price</button>
      <p id="total">Total: $1.87</p>
    </div>
    <div id="register">
      <p>Change in drawer:</p>
      <ul>
        <li>Pennies: $0.73</li>
        <li>Nickels: $2.05</li>
        <li>Dimes: $1.7</li>
        <li>Quarters: $0.75</li>
        <li>Ones: $85</li>
        <li>Fives: $40</li>
        <li>Tens: $10</li>
        <li>Twenties: $60</li>
        <li>Hundreds: $100</li>
      </ul>
    </div>
    </>);
}
export default CashRegister;