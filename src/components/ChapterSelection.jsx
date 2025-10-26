import React from 'react';
import { scenes } from '../story.js';

const ChapterSelection = ({ onSelectChapter, backToMenu }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Select a Chapter</h1>
        <ul style={styles.list}>
          {scenes.map((scene, index) => (
            <li key={index} style={styles.listItem} onClick={() => onSelectChapter(index)}>
              {scene.title}
            </li>
          ))}
        </ul>
        <button style={styles.button} onClick={backToMenu}>Back to Menu</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #1e3a8a, #4c1d95, #0f172a)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui, sans-serif',
    padding: '20px',
  },
  card: {
    background: 'rgba(17, 24, 39, 0.85)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(0,0,0,0.5)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#facc15',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
  },
  listItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  button: {
    background: '#6366f1',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.5)',
  },
};

export default ChapterSelection;
