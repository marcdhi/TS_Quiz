import React from 'react';
import QuestionCard from './components/QuestionCard';

import './App.css';

const App = () => {

  const startAnimia = () => {
    "Write here"
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    "efins"
  }

  const nextQuestion = () => {
    "esiofns"
  }

  return (
    <div className="App">
      <h1>Animia</h1>
      <button onClick={startAnimia}>Start Animia</button>

      <p>Score:</p>
      <p>Loading Questions....</p>

      <QuestionCard></QuestionCard>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

// https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple

export default App;
