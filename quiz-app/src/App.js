// App.js (Quiz App)
import React, { useState } from 'react';
import './App.css';

const quizData = [
  { 
    question: 'What is the capital of France?', 
    options: ['Paris', 'London', 'Berlin', 'Madrid'], 
    correctAnswer: 'Paris' 
  },
  { 
    question: 'What is 2 + 2?', 
    options: ['3', '4', '5', '6'], 
    correctAnswer: '4' 
  },
  { 
    question: 'Who wrote "Romeo and Juliet"?', 
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], 
    correctAnswer: 'William Shakespeare' 
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="quiz-app">
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz Challenge</h1>
        {showResult ? (
          <div className="result-section">
            <p className="score-text">Your score: {score} out of {quizData.length}</p>
            <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <p className="question-text">{quizData[currentQuestion].question}</p>
              <div className="progress">Question {currentQuestion + 1}/{quizData.length}</div>
            </div>
            <div className="options-grid">
              {quizData[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  className="option-btn" 
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;