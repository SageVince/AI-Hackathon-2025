
import React, { useState, useEffect, useRef } from 'react';
import { scenes } from '../story.js';

const VisualNovel = ({ backToMenu, startScene = 0, theme }) => {
  const [currentScene, setCurrentScene] = useState(startScene);
  const [charPosition, setCharPosition] = useState('center');
  const [isAutoplaying, setIsAutoplaying] = useState(false);

  const { text, character, position, background } = scenes[currentScene];
  const autoplayIntervalRef = useRef(null);

  useEffect(() => {
    setCharPosition(position);
  }, [position]);

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const handleBack = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const toggleAutoplay = () => {
    setIsAutoplaying(prev => !prev);
  };

  useEffect(() => {
    if (isAutoplaying) {
      autoplayIntervalRef.current = setInterval(() => {
        if (currentScene < scenes.length - 1) {
          handleNext();
        } else {
          // Stop autoplay at the end of the novel
          setIsAutoplaying(false);
        }
      }, 3000); // 3-second interval for autoplay
    } else {
      clearInterval(autoplayIntervalRef.current);
    }

    // Cleanup on component unmount
    return () => clearInterval(autoplayIntervalRef.current);
  }, [isAutoplaying, currentScene]); // Rerun when isAutoplaying or currentScene changes

  const styles = {
    container: {
      fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
      height: 'calc(100vh - 60px)',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'relative',
      transition: 'background-image 0.5s ease-in-out',
    },
    character: {
      position: 'absolute',
      bottom: '20vh', // Position character above the textbox
      height: '80vh',
      transition: 'all 0.5s ease-in-out',
      left: charPosition === 'left' ? '5%' : charPosition === 'right' ? '55%' : '30%',
      transform: charPosition === 'center' ? 'translateX(-50%)' : 'none',
    },
    textBox: {
      background: theme.cardBg, // Semi-transparent white
      color: theme.text,
      padding: '30px',
      margin: '20px',
      borderRadius: '15px',
      border: `1px solid ${theme.borderColor}`,
      boxShadow: `0 4px 15px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.3 : 0.1})`,
      zIndex: 2,
    },
    characterName: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: theme.primary, // Capital One Blue
      marginBottom: '10px',
    },
    dialogue: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '20px',
        right: '40px',
        zIndex: 3,
        display: 'flex',
        gap: '10px',
      },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      {character && <img src={character} alt="Character" style={styles.character} />}
      <div style={styles.buttonContainer}>
          <button onClick={toggleAutoplay} style={{...styles.button, background: isAutoplaying ? '#dc3545' : '#28a745', color: 'white'}}>
            {isAutoplaying ? 'Stop Autoplay' : 'Start Autoplay'}
          </button>
          <button onClick={handleBack} style={{...styles.button, background: theme.inputBg, color: theme.text}}>Back</button>
          <button onClick={handleNext} style={{...styles.button, background: theme.primary, color: theme.cardBg}}>Next</button>
      </div>
      <div style={styles.textBox}>
        <div style={styles.characterName}>{scenes[currentScene].speaker || 'Narrator'}</div>
        <div style={styles.dialogue}>{text}</div>
      </div>
    </div>
  );
};

export default VisualNovel;
