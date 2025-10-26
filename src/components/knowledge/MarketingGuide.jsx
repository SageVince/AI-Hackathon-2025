
import React, { useState } from 'react';

const MarketingGuide = ({ theme, onBack, expertImg, expertName, imgStyle }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            question: 'What is the key to building a strong brand, according to the guide?',
            options: ['Copying your competitors', 'Authenticity and a unique identity', 'Having the lowest prices', 'Spending the most on advertising'],
            correctAnswer: 'Authenticity and a unique identity',
        },
        {
            question: 'What is the importance of a product launch?',
            options: ['It doesn\'t matter', 'It\'s a chance to create hype and excitement', 'It should be done quietly', 'It\'s only for big companies'],
            correctAnswer: 'It\'s a chance to create hype and excitement',
        },
        {
            question: 'How do you stay relevant over time?',
            options: ['Never change anything', 'Adapt and evolve your brand', 'Stop marketing', 'Ignore your audience'],
            correctAnswer: 'Adapt and evolve your brand',
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
            <h1 style={styles.title}>Snoop Dogg's Guide to Marketing</h1>
        </div>
        <p style={styles.subtitle}>Let's break down how to build a brand that lasts, fo shizzle.</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Build Your Brand: Be Authentic</h2>
            <p style={styles.paragraph}>
                First things first, you gotta know who you are. What makes you unique? What's your story? Your brand is your reputation, and it's built on authenticity. I didn't become Snoop Dogg overnight. I built a brand around my music, my personality, and my perspective. People can spot a fake from a mile away, so keep it real.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Create a Following: Engage Your Audience</h2>
            <p style={styles.paragraph}>
                You can't just drop a product and expect people to find it. You gotta build a community. Talk to your fans. Give them a reason to care. Whether it's on social media, in person, or through your music, you gotta connect with people on a personal level. That's how you build a loyal following that will ride with you for the long haul.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Drop it Like it's Hot: The Art of the Launch</h2>
            <p style={styles.paragraph}>
                When you're ready to launch something new, you gotta make some noise! A launch is a celebration. It's a chance to get everyone talking. Build anticipation. Tease your audience. Collaborate with other artists. When the time is right, you drop it like it's hot and watch the world react.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Stay Relevant: Evolve Your Brand</h2>
            <p style={styles.paragraph}>
                The world is always changing, and you gotta change with it. I started as a rapper, but I've been a producer, an actor, a coach, and a businessman. I'm always looking for the next opportunity to evolve my brand and stay relevant. Don't be afraid to try new things and expand your horizons. That's how you stay on top for decades.
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Further Reading</h2>
            <p style={styles.paragraph}>
                If you want to learn more about marketing, check out this guide:
            </p>
            <p style={styles.paragraph}>
                <a href="https://blog.hubspot.com/marketing/what-is-marketing" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    HubSpot: What Is Marketing?
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

export default MarketingGuide;
