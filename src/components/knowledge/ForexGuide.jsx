
import React, { useState } from 'react';

const ForexGuide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is the forex market? A market for trading:',
            options: ['Stocks and bonds', 'Commodities', 'National currencies', 'Cryptocurrencies'],
            correctAnswer: 'National currencies',
        },
        {
            question: 'What is a currency pair?',
            options: ['Two currencies that are traded against each other', 'A type of cryptocurrency', 'A tool for technical analysis', 'A type of government bond'],
            correctAnswer: 'Two currencies that are traded against each other',
        },
        {
            question: 'What is leverage in forex trading?',
            options: ['A tool to reduce risk', 'A way to control a large position with a small amount of capital', 'A type of trading strategy', 'A fee charged by brokers'],
            correctAnswer: 'A way to control a large position with a small amount of capital',
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
    blockquote: {
        borderLeft: `5px solid ${theme.primary}`,
        margin: '20px 0',
        padding: '10px 20px',
        background: theme.cardBg,
        fontStyle: 'italic',
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
            {expertImg && <img src={expertImg} alt={expertName} style={styles.expertImage} />}
            <h1 style={styles.title}>A Guide to Forex Trading</h1>
        </div>
        <p style={styles.subtitle}>Welcome. Let's explore the fast-paced world of the foreign exchange market.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What is Forex?</h2>
            <p style={styles.paragraph}>
                The foreign exchange (forex) market is the largest and most liquid financial market in the world, where national currencies are traded. Unlike the stock market, the forex market is decentralized and operates 24 hours a day, five days a week.
            </p>
            <div style={styles.blockquote}>
                <p style={styles.paragraph}>"The foreign exchange market is a cornerstone of the global economy. It facilitates international trade and investment by enabling currency conversion."</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Concepts</h2>
            <p style={styles.paragraph}><b>Currency Pairs:</b> In the forex market, currencies are traded in pairs. For example, the EUR/USD pair represents the value of the euro relative to the US dollar.</p>
            <p style={styles.paragraph}><b>Pips:</b> A "percentage in point" or "pip" is the smallest unit of price movement in a currency pair.</p>
            <p style={styles.paragraph}><b>Leverage:</b> Forex brokers often provide leverage, which allows traders to control a larger position with a smaller amount of capital. While leverage can amplify profits, it also magnifies losses and is a major risk factor.</p>
            <p style={styles.paragraph}><b>Margin:</b> The amount of money required in your account to open and maintain a leveraged position.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Major Currency Pairs</h2>
            <p style={styles.paragraph}>The most traded currency pairs in the world are known as the "majors." They all involve the US dollar and are known for their high liquidity.</p>
            <p style={styles.paragraph}><b>EUR/USD</b> (Euro/US Dollar)</p>
            <p style={styles.paragraph}><b>USD/JPY</b> (US Dollar/Japanese Yen)</p>
            <p style={styles.paragraph}><b>GBP/USD</b> (British Pound/US Dollar)</p>
            <p style={styles.paragraph}><b>USD/CHF</b> (US Dollar/Swiss Franc)</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Getting Started</h2>
            <p style={styles.paragraph}><b>1. Educate Yourself:</b> Before trading with real money, it is essential to understand the fundamentals of the forex market, including the factors that influence currency prices.</p>
            <p style={styles.paragraph}><b>2. Choose a Reputable Broker:</b> Select a forex broker that is regulated by a reputable financial authority.</p>
            <p style={styles.paragraph}><b>3. Practice with a Demo Account:</b> Most brokers offer demo accounts that allow you to practice trading with virtual money. This is a crucial step to familiarize yourself with the trading platform and test your strategies without risking real capital.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To delve deeper into forex trading, the following resource is recommended:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.babypips.com/learn/forex" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    BabyPips.com: School of Pipsology
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

export default ForexGuide;
