
import React, { useState } from 'react';
import { lessons } from '../lessons'; // We'll create this next
import Lesson from './Lesson';

const Knowledge = ({ theme }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '20px',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: theme.textSecondary,
        marginBottom: '50px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
    },
    lessonCard: {
        background: theme.cardBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '12px',
        padding: '25px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    lessonTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '15px',
    },
    lessonDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
    },
  };

  if (selectedLesson) {
    return <Lesson lesson={selectedLesson} onBack={() => setSelectedLesson(null)} theme={theme} />
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Financial Knowledge Base</h1>
      <p style={styles.subtitle}>Learn the core principles of finance and investing. Test your knowledge and become a smarter investor.</p>
      <div style={styles.grid}>
        {lessons.map(lesson => (
          <div key={lesson.id} style={styles.lessonCard} onClick={() => setSelectedLesson(lesson)}>
            <h2 style={styles.lessonTitle}>{lesson.title}</h2>
            <p style={styles.lessonDescription}>{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
