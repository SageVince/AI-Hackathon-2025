
import React, { useState } from 'react';

const DerivativesGuide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is a derivative? A financial contract whose value is derived from:',
            options: ['A company\'s earnings', 'An underlying asset', 'The stock market index', 'Government bonds'],
            correctAnswer: 'An underlying asset',
        },
        {
            question: 'What is the main purpose of hedging with derivatives?',
            options: ['To maximize profit', 'To reduce risk', 'To increase leverage', 'To speculate on price movements'],
            correctAnswer: 'To reduce risk',
        },
        {
            question: 'Which type of derivative gives the holder the right, but not the obligation, to buy or sell an asset?',
            options: ['Futures', 'Forwards', 'Options', 'Swaps'],
            correctAnswer: 'Options',
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
            <h1 style={styles.title}>A Guide to Financial Derivatives</h1>
        </div>
        <p style={styles.subtitle}>Welcome. Let's explore the complex and powerful world of financial derivatives.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What Are Derivatives?</h2>
            <p style={styles.paragraph}>
                A derivative is a financial instrument whose value is derived from an underlying asset or group of assets. These underlying assets can be stocks, bonds, commodities, currencies, interest rates, or market indexes. Derivatives are essentially contracts between two or more parties, and their price is determined by fluctuations in the underlying asset.
            </p>
            <div style={styles.blockquote}>
                <p style={styles.paragraph}>"Derivatives are financial weapons of mass destruction." - Warren Buffett</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Types of Derivatives</h2>
            <p style={styles.paragraph}><b>Futures:</b> A standardized contract to buy or sell an asset at a predetermined price on a specified future date. Futures contracts are traded on exchanges.</p>
            <p style={styles.paragraph}><b>Forwards:</b> Similar to futures, but they are customized contracts traded over-the-counter (OTC) between two parties.</p>
            <p style={styles.paragraph}><b>Options:</b> Give the holder the right, but not the obligation, to buy (call option) or sell (put option) an asset at a specified price on or before a certain date.</p>
            <p style={styles.paragraph}><b>Swaps:</b> Contracts in which two parties agree to exchange a series of cash flows over a specified period. The most common type is an interest rate swap.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Why Use Derivatives?</h2>
            <p style={styles.paragraph}><b>Hedging:</b> Derivatives are often used to mitigate risk. For example, a farmer can use a futures contract to lock in a price for their crop, protecting them from a potential price decline.</p>
            <p style={styles.paragraph}><b>Speculation:</b> Traders can use derivatives to bet on the future direction of an asset's price. Due to the leverage involved, derivatives can offer the potential for high returns, but also carry the risk of significant losses.</p>
            <p style={styles.paragraph}><b>Arbitrage:</b> The practice of taking advantage of price differences in different markets. Traders can use derivatives to exploit these opportunities.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Risks of Derivatives</h2>
            <p style={styles.paragraph}>Derivatives are complex and can be highly risky. The leverage inherent in many derivative contracts can amplify losses, and it is possible to lose more than the initial investment. It is crucial for investors to have a thorough understanding of the risks before trading derivatives.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To gain a deeper understanding of financial derivatives, the following resource is recommended:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.investopedia.com/terms/d/derivative.asp" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Investopedia: What Are Derivatives?
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

export default DerivativesGuide;
