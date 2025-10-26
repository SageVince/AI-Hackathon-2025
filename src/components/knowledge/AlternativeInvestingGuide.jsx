
import React, { useState } from 'react';

const AlternativeInvestingGuide = ({ theme, onBack, expertImg, expertName, imgStyle }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'Which of the following is considered a commodity?',
            options: ['A stock', 'A bond', 'Gold', 'A REIT'],
            correctAnswer: 'Gold',
        },
        {
            question: 'What is a major benefit of investing in real estate?',
            options: ['High liquidity', 'Tax advantages and potential for rental income', 'Guaranteed appreciation', 'No maintenance costs'],
            correctAnswer: 'Tax advantages and potential for rental income',
        },
        {
            question: 'What is a derivative?',
            options: ['A type of stock', 'A physical commodity', 'A contract whose value is derived from an underlying asset', 'A government bond'],
            correctAnswer: 'A contract whose value is derived from an underlying asset',
        },
    ];

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
    },
    backButton: {
        background: 'none',
        border: 'none',
        color: theme.primary,
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginBottom: '30px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    expertImage: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: `3px solid ${theme.primary}`,
        objectFit: 'cover',
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: theme.textSecondary,
        marginBottom: '50px',
    },
    section: {
        marginBottom: '40px',
    },
    sectionTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '20px',
        borderBottom: `2px solid ${theme.primary}`,
        paddingBottom: '10px',
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.8',
        marginBottom: '15px',
    },
    link: {
        color: theme.primary,
        textDecoration: 'none',
    },
    quizContainer: {
        marginTop: '50px',
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
  };

  return (
    <div style={styles.container}>
        <button style={styles.backButton} onClick={onBack}>&larr; Back to Knowledge Base</button>
        <div style={styles.header}>
            {expertImg && <img src={expertImg} alt={expertName} style={{...styles.expertImage, ...imgStyle}} />}
            <h1 style={styles.title}>Guide to Alternative Investments</h1>
        </div>
        <p style={styles.subtitle}>Beyond stocks and bonds, a world of opportunity awaits. Let's explore it.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Real Estate</h2>
            <p style={styles.paragraph}>
                Real estate is a classic alternative investment. It involves purchasing property to generate income (through rent) or for capital appreciation. It offers tax advantages, the potential for steady cash flow, and the ability to leverage your investment with a mortgage.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Commodities</h2>
            <p style={styles.paragraph}>
                Commodities are raw materials or agricultural products. This includes everything from gold and oil to wheat and coffee. They can be a good way to diversify your portfolio, as their prices often move independently of the stock market.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Derivatives</h2>
            <p style={styles.paragraph}>
                Derivatives are financial contracts whose value is derived from an underlying asset. Options, futures, and swaps are all types of derivatives. They are often used for hedging risk or for speculation, but they are complex and can be very risky.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To learn more about alternative investments, check out this resource:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.forbes.com/advisor/investing/alternative-investments/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Forbes: Alternative Investments
                </a>
            </p>
        </div>

        <div style={styles.quizContainer}>
          <h2 style={styles.sectionTitle}>Test Your Knowledge</h2>
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

export default AlternativeInvestingGuide;
