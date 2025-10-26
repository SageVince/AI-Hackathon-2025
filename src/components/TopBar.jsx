
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const TopBar = ({ onNavigate, toggleTheme, theme, currentView }) => {

    const styles = {
        topBar: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: theme.cardBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            borderBottom: `1px solid ${theme.borderColor}`,
            zIndex: 1001,
        },
        navLinks: {
            display: 'flex',
            gap: '25px',
        },
        navLink: {
            background: 'none',
            border: 'none',
            color: theme.text,
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            padding: '10px 0',
            borderBottom: '2px solid transparent',
        },
        activeLink: {
            color: theme.primary,
            borderBottom: `2px solid ${theme.primary}`,
        },
        themeToggleButton: {
            background: 'none',
            border: 'none',
            color: theme.text,
            fontSize: '1.2rem',
            cursor: 'pointer',
        },
    };

    const navItems = ['ai-assistants', 'stonks-minigame', 'savings', 'knowledge'];

    return (
        <div style={styles.topBar}>
            <div style={styles.navLinks}>
                {navItems.map(item => (
                     <button 
                        key={item}
                        onClick={() => onNavigate(item)}
                        style={{
                            ...styles.navLink,
                            ...(currentView === item ? styles.activeLink : {}),
                        }}
                     >
                        {item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                ))}
            </div>
            <button onClick={toggleTheme} style={styles.themeToggleButton}>
                {theme.background === '#ffffff' ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );
};

export default TopBar;
