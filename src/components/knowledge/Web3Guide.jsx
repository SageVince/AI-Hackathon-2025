
import React, { useState } from 'react';

const Web3Guide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is the core principle of Web3?',
            options: ['Centralization', 'Decentralization', 'Data monetization by large companies', 'Government control'],
            correctAnswer: 'Decentralization',
        },
        {
            question: 'What technology is Web3 built on?',
            options: ['Traditional databases', 'Cloud computing', 'Blockchain', 'Artificial intelligence'],
            correctAnswer: 'Blockchain',
        },
        {
            question: 'What does DeFi stand for?',
            options: ['Decentralized Finance', 'Digital Finance', 'Distributed Finance', 'Decentralized Funding'],
            correctAnswer: 'Decentralized Finance',
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
            <h1 style={styles.title}>A Guide to Web3</h1>
        </div>
        <p style={styles.subtitle}>Welcome. Let's explore the next evolution of the internet.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What is Web3?</h2>
            <p style={styles.paragraph}>
                Web3 represents the next generation of the internet, one that is built on the principles of decentralization, transparency, and user ownership. Unlike the current internet (Web2), where large corporations control the flow of information and data, Web3 aims to create a more open and equitable digital world.
            </p>
            <div style={styles.blockquote}>
                <p style={styles.paragraph}>"Web3 is the internet owned by the builders and users, orchestrated with tokens." - Chris Dixon</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Core Concepts</h2>
            <p style={styles.paragraph}><b>Blockchain:</b> The foundational technology of Web3. It is a distributed, immutable ledger that allows for secure and transparent transactions without the need for a central authority.</p>
            <p style={styles.paragraph}><b>Decentralization:</b> In Web3, control is distributed among users rather than being concentrated in the hands of a few companies. This is achieved through the use of decentralized networks and protocols.</p>
            <p style={styles.paragraph}><b>Cryptocurrency:</b> Digital currencies, such as Bitcoin and Ethereum, serve as the native economic layer of Web3, enabling peer-to-peer transactions and incentivizing participation in decentralized networks.</p>
            <p style={styles.paragraph}><b>Smart Contracts:</b> Self-executing contracts with the terms of the agreement directly written into code. They are the building blocks of decentralized applications (dApps).</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Pillars of Web3</h2>
            <p style={styles.paragraph}><b>DeFi (Decentralized Finance):</b> A new financial system that is being built on top of blockchain technology. It aims to create a more open, transparent, and accessible financial system for everyone.</p>
            <p style={styles.paragraph}><b>NFTs (Non-Fungible Tokens):</b> Unique digital assets that represent ownership of a specific item or piece of content, such as art, music, or collectibles. NFTs are enabling new economies for creators and collectors.</p>
            <p style={styles.paragraph}><b>DAOs (Decentralized Autonomous Organizations):</b> Internet-native organizations where decisions are made by the members, and the rules are encoded in smart contracts. DAOs are a new way to organize and collaborate online.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To learn more about Web3, the following resource is a great place to start:
            </p>
            <p style={styles.paragraph}>
                <a href="https://ethereum.org/en/web3/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Ethereum.org: What is Web3?
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

export default Web3Guide;
