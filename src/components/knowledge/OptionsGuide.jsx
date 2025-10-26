
import React, { useState } from 'react';

const OptionsGuide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What does a call option give you the right to do?',
            options: ['Sell a stock', 'Buy a stock', 'Short a stock'],
            correctAnswer: 'Buy a stock',
        },
        {
            question: 'Which "Greek" measures the time decay of an option?',
            options: ['Delta', 'Gamma', 'Theta'],
            correctAnswer: 'Theta',
        },
        {
            question: 'What is a covered call?',
            options: ['A bearish strategy', 'A strategy where you sell a call option on a stock you already own', 'A strategy to buy a call and a put at the same time'],
            correctAnswer: 'A strategy where you sell a call option on a stock you already own',
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
            <h1 style={styles.title}>A Guide to Options Trading</h1>
        </div>
        <p style={styles.subtitle}>Welcome. Let's explore the world of options, a powerful tool for both speculation and hedging.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What Are Options?</h2>
            <p style={styles.paragraph}>
                An option is a contract that gives the buyer the right, but not the obligation, to buy or sell an underlying asset (like a stock) at a predetermined price, known as the strike price, on or before a specific date, the expiration date.
            </p>
            <div style={styles.blockquote}>
                <p style={styles.paragraph}>"Options are a tool. And like any tool, they can be used to build or to destroy. The choice is in the hands of the user."</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Terms</h2>
            <p style={styles.paragraph}><b>Call Option:</b> Gives the holder the right to buy an asset at a certain price within a specific period.</p>
            <p style={styles.paragraph}><b>Put Option:</b> Gives the holder the right to sell an asset at a certain price within a specific period.</p>
            <p style={styles.paragraph}><b>Strike Price:</b> The price at which the holder of an option can buy or sell the underlying asset.</p>
            <p style={styles.paragraph}><b>Expiration Date:</b> The date on which an option expires and becomes worthless.</p>
            <p style={styles.paragraph}><b>Premium:</b> The price of the option contract.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Basic Strategies</h2>
            <p style={styles.paragraph}><b>Long Call:</b> Buying a call option with the expectation that the price of the underlying asset will rise. This is a simple, bullish strategy.</p>
            <p style={styles.paragraph}><b>Long Put:</b> Buying a put option with the expectation that the price of the underlying asset will fall. This is a simple, bearish strategy.</p>
            <p style={styles.paragraph}><b>Covered Call:</b> Selling a call option on a stock that you already own. This is a neutral to slightly bullish strategy that allows you to generate income from the premium.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>The Greeks</h2>
            <p style={styles.paragraph}>The "Greeks" are a set of risk measures that help traders understand how an option's price might change.</p>
            <p style={styles.paragraph}><b>Delta:</b> Measures how much an option's price is expected to change for a $1 move in the underlying stock.</p>
            <p style={styles.paragraph}><b>Gamma:</b> Measures the rate of change of an option's delta.</p>
            <p style={styles.paragraph}><b>Theta:</b> Measures the rate of an option's time decay. As the expiration date approaches, the theta of an option increases.</p>
            <p style={styles.paragraph}><b>Vega:</b> Measures an option's sensitivity to changes in the implied volatility of the underlying asset.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To learn more about options trading, check out the following resource:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.investopedia.com/options-basics-tutorial-4583012" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Investopedia: Options Basics Tutorial
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

export default OptionsGuide;
