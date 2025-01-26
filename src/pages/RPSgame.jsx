import React, { useState } from 'react';
import '../App.css';

function RPSgame() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundResult, setRoundResult] = useState('');
  const [winnerMessage, setWinnerMessage] = useState('');

  function getRandomComputerResult() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Scissors' && computer === 'Paper') ||
      (player === 'Paper' && computer === 'Rock')
    );
  }

  function handlePlayerChoice(userOption) {
    const computerResult = getRandomComputerResult();
    let resultMessage;

    if (hasPlayerWonTheRound(userOption, computerResult)) {
      setPlayerScore(playerScore + 1);
      resultMessage = `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      resultMessage = `It's a tie! Both chose ${userOption}`;
    } else {
      setComputerScore(computerScore + 1);
      resultMessage = `Computer wins! ${computerResult} beats ${userOption}`;
    }

    setRoundResult(resultMessage);
    checkWinner(playerScore + 1, computerScore + 1);
  }

  function checkWinner(updatedPlayerScore, updatedComputerScore) {
    if (updatedPlayerScore === 3 || updatedComputerScore === 3) {
      setWinnerMessage(
        updatedPlayerScore === 3 ? 'Player has won the game!' : 'Computer has won the game!'
      );
    }
  }

  function resetGame() {
    setPlayerScore(0);
    setComputerScore(0);
    setRoundResult('');
    setWinnerMessage('');
  }

  return (
    <section>
      <details className='rules-container'>
        <summary>Rules to the game</summary>
        <p>You will be playing against the computer.</p>
        <p>You can choose between Rock, Paper, and Scissors.</p>
        <p>The first one to three points wins.</p>
        <ul>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
      </details>

      <div className='score-container'>
        <strong>Player Score: <span className='score'>{playerScore}</span></strong>
        <strong>Computer Score: <span className='score'>{computerScore}</span></strong>
      </div>

      <div className='options-container'>
        <h2>Choose an option:</h2>
        <div className='btn-container'>
          <button className='btn' onClick={() => handlePlayerChoice('Rock')}>Rock</button>
          <button className='btn' onClick={() => handlePlayerChoice('Paper')}>Paper</button>
          <button className='btn' onClick={() => handlePlayerChoice('Scissors')}>Scissors</button>
        </div>
      </div>

      <div className='results-container'>
        <p>{roundResult}</p>
        <p>{winnerMessage}</p>
        {winnerMessage && <button className='btn' onClick={resetGame}>Play again?</button>}
      </div>
    </section>
  );
}

export default RPSgame;
