import React from 'react';

const RPGMenu = ({ onNavigate }) => {
  return (
    <div style={styles.container}>
      <div style={styles.map}>
        <div style={styles.character}>🐷</div>
        <div style={{ ...styles.house, top: '20%', left: '20%' }} onClick={() => onNavigate('visual-novel')}>
          Start Story
        </div>
        <div style={{ ...styles.house, top: '50%', left: '50%' }} onClick={() => onNavigate('chapter-selection')}>
          Chapters
        </div>
        <div style={{ ...styles.house, top: '20%', left: '80%' }} onClick={() => onNavigate('stonks-minigame')}>
          Stonks!
        </div>
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
  map: {
    position: 'relative',
    width: '800px',
    height: '600px',
    backgroundColor: '#333',
    border: '2px solid #fff',
  },
  character: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
  },
  house: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    backgroundColor: '#8B4513',
    border: '2px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

export default RPGMenu;
