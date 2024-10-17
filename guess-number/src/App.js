import React, { useState } from 'react';
import './App.css'; // Ensure this line is present

import { Container, TextField, Button, Typography } from '@mui/material';

function App() {
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
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Guess the Number (1-10)
      </Typography>
      <TextField
        label="Your Guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="number"
        inputProps={{ min: 1, max: 10 }}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" onClick={handleGuess}>
        Guess
      </Button>
      <Typography variant="h6" color="primary" style={{ marginTop: '20px' }}>
        {message}
      </Typography>
    </Container>
  );
}

export default App;
