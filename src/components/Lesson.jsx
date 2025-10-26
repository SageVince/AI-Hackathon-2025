
import React, { useState } from 'react';
import Quiz from './Quiz';

const Lesson = ({ lesson, onBack, theme }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
        maxWidth: '900px',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },
    backButton: {
        background: theme.textSecondary,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: theme.primary,
    },
    content: {
        background: theme.cardBg,
        padding: '30px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        lineHeight: '1.8',
        fontSize: '1.1rem',
    },
    quizButton: {
        display: 'block',
        margin: '40px auto 0 auto',
        background: theme.primary,
        color: 'white',
        padding: '15px 30px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
  };

  if (showQuiz) {
      return <Quiz quiz={lesson.quiz} onBack={() => setShowQuiz(false)} theme={theme} />
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>Back to Lessons</button>
        <h1 style={styles.title}>{lesson.title}</h1>
      </div>
      <div style={styles.content} dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
      <button style={styles.quizButton} onClick={() => setShowQuiz(true)}>Test Your Knowledge</button>
    </div>
  );
};

export default Lesson;
