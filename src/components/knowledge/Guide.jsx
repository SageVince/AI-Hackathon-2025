import React, { useState } from 'react';

const Guide = ({ theme, onBack, guide }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

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

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'header':
        return <h2 key={index} style={styles.sectionTitle}>{item.text}</h2>;
      case 'paragraph':
        return <p key={index} style={styles.paragraph}>{item.text}</p>;
      case 'quote':
        return <p key={index} style={{ ...styles.paragraph, textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>{item.text}</p>;
      case 'blockquote':
        return <div key={index} style={styles.blockquote}><p style={styles.paragraph}>{item.text}</p></div>;
      case 'link':
        return <p key={index} style={styles.paragraph}><a href={item.url} target="_blank" rel="noopener noreferrer" style={styles.link}>{item.text}</a></p>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>&larr; Back to Knowledge Base</button>
      <div style={styles.header}>
        {guide.expertImg && <img src={guide.expertImg} alt={guide.expert} style={{...styles.expertImage, ...guide.imgStyle}} />}
        <h1 style={styles.title}>{guide.title}</h1>
      </div>
      <p style={styles.subtitle}>{guide.description}</p>

      {guide.content.map((item, index) => renderContent(item, index))}

      {guide.questions && guide.questions.length > 0 && (
        <div style={styles.quizContainer}>
          <h2 style={styles.sectionTitle}>Test Your Knowledge</h2>
          {guide.questions.map((q, index) => (
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
              {guide.questions.map((q, index) => (
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
      )}
    </div>
  );
};

export default Guide;
