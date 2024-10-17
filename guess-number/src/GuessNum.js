import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function GuessNum() {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (userGuess === randomNumber) {
      setMessage('Correct! 🎉');
    } else if (userGuess < randomNumber) {
      setMessage('Too low! Try again.');
    } else if (userGuess > randomNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Please enter a valid number.');
    }
    setGuess('');
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
      />
      <Button variant="contained" onClick={handleGuess}>
        Guess
      </Button>
      <Typography variant="h6" color="primary">
        {message}
      </Typography>
    </Container>
  );
}

export default GuessNum;
