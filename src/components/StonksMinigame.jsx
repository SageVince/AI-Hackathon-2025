import React from 'react';

const StonksMinigame = ({ backToMenu }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Stonks Minigame</h1>
        <p style={styles.text}>Coming soon! A minigame where you can trade stonks and compete on a leaderboard.</p>
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
  text: {
    color: '#e0e7ff',
    lineHeight: '1.6',
    fontSize: '1.2rem',
    marginBottom: '2rem',
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

export default StonksMinigame;
