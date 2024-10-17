import React, { useState } from 'react';
import './App.css'; // Ensure this line is present

import { Container, TextField, Button, Typography } from '@mui/material';

function GuessNum() {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    setAttempts(prev => prev + 1);

    if (userGuess === randomNumber) {
      setMessage(`Correct! 🎉 You found the number in ${attempts + 1} attempts.`);
      setIsGameOver(true);
    } else if (userGuess < randomNumber) {
      setMessage('Too low! Try again.');
    } else if (userGuess > randomNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Please enter a valid number.');
    }
    setGuess('');
  };

  const resetGame = () => {
    setGuess('');
    setMessage('');
    setAttempts(0);
    setIsGameOver(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Guess the Number (1-10)
      </Typography>
      <TextField
        label="Your Guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="number"
        inputProps={{ min: 1, max: 10 }}
        disabled={isGameOver} // Disable input after the game is over
      />
      <Button variant="contained" onClick={handleGuess} disabled={isGameOver}>
        Guess
      </Button>
      {isGameOver && (
        <Button variant="outlined" onClick={resetGame} style={{ marginLeft: '10px' }}>
          Play Again
        </Button>
      )}
      <Typography variant="h6" color="primary" style={{ marginTop: '20px' }}>
        {message}
      </Typography>
    </Container>
  );
}

return (
  <Container className="container"> {/* Add the container class here */}
    <Typography variant="h4" gutterBottom>
      Guess the Number (1-10)
    </Typography>
    {/* Other components */}
  </Container>
);

export default GuessNum;
