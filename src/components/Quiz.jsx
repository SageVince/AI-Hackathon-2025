
import React, { useState } from 'react';

const Quiz = ({ quiz, onBack, theme }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    if (option === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(option);

    setTimeout(() => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setShowScore(true);
        }
    }, 1000);
  };

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '40px',
    },
    questionCard: {
        background: theme.cardBg,
        padding: '30px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
    },
    questionText: {
        fontSize: '1.5rem',
        marginBottom: '30px',
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    optionButton: {
        background: theme.inputBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'left',
        cursor: 'pointer',
        fontSize: '1.1rem',
        color: theme.text,
    },
    scoreCard: {
        textAlign: 'center',
        fontSize: '1.8rem',
    },
    backButton: {
        background: theme.textSecondary,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '30px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Knowledge Quiz</h1>
      {showScore ? (
        <div style={{...styles.questionCard, ...styles.scoreCard}}>
          <h2>You scored {score} out of {quiz.length}!</h2>
          <button onClick={onBack} style={styles.backButton}>Back to Lesson</button>
        </div>
      ) : (
        <div style={styles.questionCard}>
          <p style={styles.questionText}>{currentQuestion + 1}. {quiz[currentQuestion].question}</p>
          <div style={styles.optionsContainer}>
            {quiz[currentQuestion].options.map(option => {
                const isSelected = selectedOption === option;
                const isCorrect = quiz[currentQuestion].answer === option;
                const backgroundColor = isSelected ? (isCorrect ? '#28a745' : '#dc3545') : theme.inputBg;

                return (
                    <button 
                        key={option}
                        onClick={() => handleAnswer(option)} 
                        style={{...styles.optionButton, backgroundColor, color: isSelected ? 'white' : theme.text}}
                        disabled={selectedOption}
                    >
                        {option}
                    </button>
                )
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
