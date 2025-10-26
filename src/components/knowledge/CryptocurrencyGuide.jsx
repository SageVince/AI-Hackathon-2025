
import React, { useState } from 'react';

const CryptocurrencyGuide = ({ theme, onBack, expertImg, expertName }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is the primary use case for Bitcoin, as described in the guide?',
            options: ['dApps and smart contracts', 'A store of value and a hedge against inflation', 'Fast and cheap cross-border payments', 'NFTs and gaming'],
            correctAnswer: 'A store of value and a hedge against inflation',
        },
        {
            question: 'Which cryptocurrency is known for its smart contract capabilities?',
            options: ['Bitcoin', 'Ethereum', 'XRP', 'All of the above'],
            correctAnswer: 'Ethereum',
        },
        {
            question: 'What is a key security recommendation for storing large amounts of cryptocurrency?',
            options: ['Keep it on the exchange', 'Use a software wallet', 'Use a hardware wallet', 'Write your private key on a post-it note'],
            correctAnswer: 'Use a hardware wallet',
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
            <h1 style={styles.title}>An Introduction to Cryptocurrency</h1>
        </div>
        <p style={styles.subtitle}>Welcome, traveler of the digital frontier. Let us decode the fundamentals of this new asset class.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What is Cryptocurrency?</h2>
            <p style={styles.paragraph}>
                At its core, a cryptocurrency is a digital or virtual token that uses cryptography for security. Unlike traditional currencies issued by governments (fiat currencies), most cryptocurrencies are decentralized, meaning they are not controlled by any single entity like a bank or government. This decentralization is achieved through a technology called blockchain.
            </p>
            <div style={styles.blockquote}>
                <p style={styles.paragraph}>"For the first time, a way for one Internet user to transfer a unique piece of digital property to another Internet user, such that the transfer is guaranteed to be safe and secure, everyone knows that the transfer has taken place, and nobody can challenge the legitimacy of the transfer. The consequences of this breakthrough are hard to overstate." - Marc Andreessen</p>
            </div>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Concepts</h2>
            <p style={styles.paragraph}><b>Blockchain:</b> A distributed, immutable ledger that records transactions in blocks. Once a block is added to the chain, it cannot be altered, ensuring the integrity of the transaction history.</p>
            <p style={styles.paragraph}><b>Decentralization:</b> The network is maintained by a distributed network of computers, making it resistant to censorship or control by any single party.</p>
            <p style={styles.paragraph}><b>Private and Public Keys:</b> A public key is like your bank account number, which you can share with others to receive funds. A private key is like your password, which grants access to your funds and must be kept secret.</p>
            <p style={styles.paragraph}><b>Wallets:</b> Digital wallets used to store, send, and receive cryptocurrencies. They can be software (hot wallets) or hardware (cold wallets).</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Major Cryptocurrencies</h2>
            <p style={styles.paragraph}><b>Bitcoin (BTC):</b> The first and most well-known cryptocurrency. It is often referred to as "digital gold" and is primarily seen as a store of value and a hedge against inflation due to its limited supply of 21 million coins.</p>
            <p style={styles.paragraph}><b>Ethereum (ETH):</b> More than just a digital currency, Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). It is the backbone of the decentralized finance (DeFi) and non-fungible token (NFT) ecosystems.</p>
            <p style={styles.paragraph}><b>Altcoins:</b> Any cryptocurrency other than Bitcoin. There are thousands of altcoins, each with different features and use cases, ranging from high-speed payment networks to platforms for decentralized gaming.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Getting Started</h2>
            <p style={styles.paragraph}><b>1. Do Your Own Research (DYOR):</b> The crypto space is filled with hype and misinformation. It is crucial to research any project before investing. Understand its use case, the team behind it, and its tokenomics.</p>
            <p style={styles.paragraph}><b>2. Choose a Reputable Exchange:</b> To buy your first cryptocurrency, you will need to use a cryptocurrency exchange. Some of the most popular exchanges for beginners are Coinbase, Kraken, and Gemini.</p>
            <p style={styles.paragraph}><b>3. Secure Your Assets:</b> For small amounts, keeping your crypto on a reputable exchange is convenient. For larger amounts, it is highly recommended to use a personal wallet for better security. Hardware wallets (cold storage) are considered the most secure option.</p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                To dive deeper into the world of cryptocurrency, the following resource is a good starting point:
            </p>
            <p style={styles.paragraph}>
                <a href="https://www.coinbase.com/learn/crypto-basics" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Coinbase Learn: Crypto Basics
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

export default CryptocurrencyGuide;
