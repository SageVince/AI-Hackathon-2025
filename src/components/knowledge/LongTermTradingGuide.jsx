
import React, { useState } from 'react';

const LongTermTradingGuide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is the most powerful force for wealth creation, according to the guide?',
            options: ['Day trading', 'Market timing', 'Compound interest'],
            correctAnswer: 'Compound interest',
        },
        {
            question: 'What is a "margin of safety"?',
            options: ['A type of insurance', 'Buying a stock for significantly less than its intrinsic value', 'Diversifying across many stocks'],
            correctAnswer: 'Buying a stock for significantly less than its intrinsic value',
        },
        {
            question: 'What is the first rule of investing?',
            options: ['Maximize returns', 'Never lose money', 'Always follow the hype'],
            correctAnswer: 'Never lose money',
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
            <h1 style={styles.title}>A Guide to Long-Term Value Investing</h1>
        </div>
        <p style={styles.subtitle}>Welcome. Let's talk about the slow, steady, and sure path to building real wealth.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>The Two Rules of Investing</h2>
            <p style={styles.paragraph}>
                Let's start with the most important lesson. There are only two rules of investing:
            </p>
            <p style={{...styles.paragraph, textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold'}}>
                Rule No. 1: Never lose money. <br/>
                Rule No. 2: Never forget Rule No. 1.
            </p>
            <p style={styles.paragraph}>
                This isn't a joke. The preservation of capital is the bedrock of successful investing. Big losses are devastating because they require even bigger gains just to get back to where you started. A 50% loss requires a 100% gain to break even. It is far more important to avoid the losers than it is to pick the winners.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>The Eighth Wonder of the World: Compound Interest</h2>
            <p style={styles.paragraph}>
                The most powerful force in finance is compound interest. It's the process of earning returns on your original investment, and then earning returns on those returns. It's a snowball effect that, over a long period, can turn a small sum into a fortune.
            </p>
            <p style={styles.paragraph}>
                Time is your greatest ally. The sooner you start, the more powerful compounding becomes. It is not about timing the market, but about time *in* the market.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Buy Wonderful Companies at Fair Prices</h2>
            <p style={styles.paragraph}>
                Forget the speculative noise and the get-rich-quick schemes. The secret is to buy pieces of wonderful businesses. A stock is not a lottery ticket; it's ownership in a real company.
            </p>
            <p style={styles.paragraph}>
                Look for businesses with a durable competitive advantage (a "moat"), a long history of profitability, and honest, capable management. Then, the final piece of the puzzle is to buy them at a sensible price.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>The Margin of Safety</h2>
            <p style={styles.paragraph}>
                This is the cornerstone of value investing. The margin of safety is the difference between the intrinsic value of a business and the price you pay for it. A large margin of safety protects you from bad luck, miscalculations, or the unpredictable swings of the market.
            </p>
             <div style={styles.blockquote}>
                <p style={styles.paragraph}>"The function of margin of safety is, in essence, that of rendering unnecessary an accurate estimate of the future." - Benjamin Graham</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To dive deeper into the principles of value investing, the following resource is invaluable:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.investopedia.com/terms/v/valueinvesting.asp" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Investopedia: Value Investing
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

export default LongTermTradingGuide;
