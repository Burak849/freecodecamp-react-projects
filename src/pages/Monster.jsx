//JAVASCRIPT CAMP, IT WILL BE CONVERTED TO REACT PROJECT
import React, { use, useState } from "react";
import '../App.css';


const Monster = () => {


  const [playerStats, setPlayerStats] = useState({
    xp: 0,
    health: 100,
    gold: 50,
    level: 0,
    currentWeapon: "",
    inventory: ["stick"],
    playerlocation: [0]
  });

  const [monsterStats, setMonsterStats] = useState([
    { name: "Goblin", health: 50, damage: 10, xpReward: 20, goldReward: 10 },
    { name: "Orc", health: 20, damage: 5, xpReward: 10, goldReward: 5 },
    { name: "Fanged Beast", health: 100, damage: 20, xpReward: 50, goldReward: 40 },
    { name: "Dragon", health: 200, damage: 50, xpReward: 100, goldReward: 100 }
  ]);

  const [weaponStats, setWeaponStats] = useState([
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
  ]);

  const [locations, setLocations] = useState([
  {
    name: "Town Square",
    functions: [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "Store",
    functions: [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "Cave",
    functions: [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "Fight",
    functions: [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "Kill monster",    
    functions: [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "Lose",
    functions: [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "Win", 
    functions: [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
]);

const [message, setMessage] = useState("Welcome to the adventure!");
const [currentMonster, setCurrentMonster] = useState(monsterStats[0]);

const attackMonster = () => {
  const weaponPower = weaponStats[playerStats.currentWeapon].power;
  const damageDealt = Math.floor(Math.random() * weaponPower) + 5;
  const newMonsterHealth = currentMonster.health - damageDealt;

  if (newMonsterHealth <= 0) {
    setPlayerStats((prev) => ({
      ...prev,
      xp: prev.xp + monsterStats.xpReward,
      gold: prev.gold + monsterStats.goldReward,
    }));
    setMessage(`Congratulations! You defeated the ${monsterStats.name}!`);
  } 
  else {
    const monsterDamage = Math.floor(Math.random() * currentMonster.damage);
    setCurrentMonster((prev) => ({ ...prev, health: newMonsterHealth }));
    setPlayerStats((prev) => ({
      ...prev,
      health: prev.health - monsterDamage,
    }));
    setMessage(`You dealt ${damageDealt} damage but took ${monsterDamage} in return.`);
  }
};

const goTown = () => setMessage(locations[0].text);
const goStore = () => setMessage(locations[1].text);
const goCave = () => setMessage(locations[2].text);
   
  function buyHealth() {
    if (playerStats.gold >= 10) {
      playerStats.gold -= 10;
      playerStats.health += 10;
    } else {
      message = "You do not have enough gold to buy health.";
    }
  }
  
  function buyWeapon() {
    if (playerStats.currentWeapon < weaponStats.length - 1) {
      if (playerStats.gold >= 30) {
        playerStats.gold -= 30;
        playerStats.currentWeapon++;
        const newWeapon = weaponStats[playerStats.currentWeapon].name;
        message = "You now have a " + newWeapon + ".";
        playerStats.inventory.push(newWeapon);
        message += " In your inventory you have: " + playerStats.inventory;
      } else {
        message = "You do not have enough gold to buy a weapon.";
      }
    } else {
      message = "You already have the most powerful weapon!";      
    }
  }
  
  function sellWeapon() {
    if (playerStats.inventory.length > 1) {
      playerStats.gold += 15;
      const goldText = playerStats.gold;
      const currentWeapon = playerStats.inventory.shift();
      message = "You sold a " + playerStats.currentWeapon + ".";
      message += " In your inventory you have: " + playerStats.inventory;
    } else {
      message = "Don't sell your only weapon!";
    }
  }
  
  
  
  function goFight() {
    if( playerStats.playerlocation === locations[3]){
      monsterHealth = monsterStats[fighting].health;
      monsterStats.style.display = "block";
      monsterName = monsterStats[fighting].name;
      monsterHealthText = monsterHealth;
    }
  }
  
  function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
      monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
    } else {
      text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      if (fighting === 2) {
        winGame();
      } else {
        defeatMonster();
      }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
      text.innerText += " Your " + inventory.pop() + " breaks.";
      currentWeapon--;
    }
  }
  
  function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
  }
  
  function isMonsterHit() {
    return Math.random() > .2 || health < 20;
  }
  
  function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
  }
  
  function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
  }
  
  function Lose(){ setMessage(locations[5].text);}
  function Win(){setMessage(locations[6].text);}
  
  function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
  }
  
  setMessage("You defeat the dragon! YOU WIN THE GAME!");


//arrange the styles!
  return (
  <section className="sectionclass">
    <div id="game">
      <div id="stats">
        <span className="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span className="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span className="stat">Gold: <strong><span id="goldText">50</span></strong></span>
      </div>
      <div id="controls">
        <button onclick={goStore}>Go to store</button>
        <button onclick={goCave}>Go to cave</button>
        <button onclick={fightDragon}>Fight dragon</button>
      </div>
      <div id="monsterStats">
        <span className="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
        <span className="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
      </div>
      <div id="text">{message}</div>
    </div>
  </section>
  );
};

export default Monster;
