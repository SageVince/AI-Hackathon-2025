
import React, { useState } from 'react';

const MasterQuiz = ({ theme, guides, onBack }) => {
  const [selectedGuides, setSelectedGuides] = useState(Object.keys(guides));
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleGuideToggle = (guideKey) => {
    setSelectedGuides(prev => 
      prev.includes(guideKey) ? prev.filter(k => k !== guideKey) : [...prev, guideKey]
    );
  };

  const startQuiz = () => {
    const allQuestions = selectedGuides.flatMap(key => guides[key].questions || []);
    setQuestions(allQuestions);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(true);
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '50px',
    },
    selectionContainer: {
        marginBottom: '40px',
    },
    guideToggle: {
        padding: '10px 15px',
        margin: '5px',
        border: `2px solid ${theme.primary}`,
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    startButton: {
        background: theme.primary,
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    quizContainer: {
        marginTop: '50px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: 'auto',
      },
      quizQuestion: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      },
      quizOption: {
        marginLeft: '10px',
      },
      submitButton: {
        background: theme.primary,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
      },
      results: {
        marginTop: '20px',
      },
      result: {
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
      },
      backButton: {
        background: 'none',
        border: 'none',
        color: theme.primary,
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginBottom: '30px',
    },
  };

  if (!quizStarted) {
    return (
        <div style={styles.container}>
            <button style={styles.backButton} onClick={onBack}>&larr; Back to Knowledge Base</button>
            <h1 style={styles.title}>Master Quiz</h1>
            <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>Select the topics you want to be quizzed on:</p>
            <div style={styles.selectionContainer}>
                {Object.keys(guides).map(key => (
                    <button 
                        key={key}
                        onClick={() => handleGuideToggle(key)}
                        style={{
                            ...styles.guideToggle,
                            background: selectedGuides.includes(key) ? theme.primary : 'transparent',
                            color: selectedGuides.includes(key) ? 'white' : theme.text,
                        }}
                    >
                        {guides[key].name}
                    </button>
                ))}
            </div>
            <button onClick={startQuiz} style={styles.startButton} disabled={selectedGuides.length === 0}>
                Start Quiz
            </button>
        </div>
    )
  }

  return (
    <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setQuizStarted(false)}>&larr; Change Topics</button>
        <h1 style={styles.title}>Master Quiz</h1>
         <div style={styles.quizContainer}>
          {questions.map((q, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p style={styles.quizQuestion}>{q.question}</p>
              {q.options.map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    id={`q${index}o${i}`}
                    name={`q${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={showResults}
                  />
                  <label htmlFor={`q${index}o${i}`} style={styles.quizOption}>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} style={styles.submitButton} disabled={showResults}>
            Submit
          </button>
          {showResults && (
            <div style={styles.results}>
              {questions.map((q, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.result,
                    background: answers[index] === q.correctAnswer ? '#28a745' : '#dc3545',
                    color: 'white',
                  }}
                >
                  <p>{q.question}</p>
                  <p>Your answer: {answers[index]}</p>
                  {answers[index] !== q.correctAnswer && <p>Correct answer: {q.correctAnswer}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default MasterQuiz;
