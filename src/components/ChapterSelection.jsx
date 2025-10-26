
import React from 'react';
import { scenes } from '../story.js';

const ChapterSelection = ({ onSelectChapter, backToMenu, theme }) => {

    const chapters = [
        { title: "Chapter 1: The Flip", sceneIndex: 0, description: "A mysterious figure introduces you to the world of investing." },
        { title: "Chapter 2: Enter the Game", sceneIndex: 7, description: "The mayor explains the town's economic challenges and the call for heroes." },
        { title: "Chapter 3: The Cousin's Call", sceneIndex: 11, description: "Put your newfound knowledge to the test in a real-world scenario." },
        { title: "Chapter 4: The Market Never Sleeps", sceneIndex: 14, description: "A mysterious figure introduces you to the world of investing." },
        { title: "Chapter 5: Crypto in the Clouds", sceneIndex: 16, description: "The mayor explains the town's economic challenges and the call for heroes." },
        { title: "Chapter 6: The Crash and the Calm", sceneIndex: 18, description: "Put your newfound knowledge to the test in a real-world scenario." },
        { title: "Chapter 7: The Rebuild", sceneIndex: 20, description: "A mysterious figure introduces you to the world of investing." },
        { title: "Chapter 8: Bulls vs. Bears", sceneIndex: 22, description: "The mayor explains the town's economic challenges and the call for heroes." },
        { title: "Chapter 9: The Gratitude Run", sceneIndex: 23, description: "Put your newfound knowledge to the test in a real-world scenario." },
        { title: "Chapter 10: The End", sceneIndex: 24, description: "Put your newfound knowledge to the test in a real-world scenario." },
    ];

    const styles = {
        container: {
            background: theme.background,
            color: theme.text,
            minHeight: 'calc(100vh - 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '50px',
            fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: theme.primary,
            marginBottom: '40px',
        },
        chapterList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
            width: '100%',
            maxWidth: '1000px',
        },
        chapterCard: {
            background: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            borderRadius: '12px',
            padding: '25px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`,
        },
        chapterCardHover: {
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 15px rgba(0, 170, 255, ${theme.background === '#1a1a1d' ? 0.3 : 0.1})`,
        },
        chapterTitle: {
            fontSize: '1.8rem',
            fontWeight: '600',
            color: theme.primary,
            marginBottom: '10px',
        },
        chapterDescription: {
            fontSize: '1rem',
            color: theme.textSecondary,
            lineHeight: 1.5,
        },
        backButton: {
            margin: '40px auto 0',
            padding: '12px 25px',
            background: theme.textSecondary,
            color: theme.background,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
        },
    };

    const handleMouseEnter = (e) => {
        Object.assign(e.currentTarget.style, styles.chapterCardHover);
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`;
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Story Chapters</h1>
            <div style={styles.chapterList}>
                {chapters.map((chapter, index) => (
                    <div 
                        key={index} 
                        style={styles.chapterCard} 
                        onClick={() => onSelectChapter(chapter.sceneIndex)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 style={styles.chapterTitle}>{chapter.title}</h2>
                        <p style={styles.chapterDescription}>{chapter.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChapterSelection;
