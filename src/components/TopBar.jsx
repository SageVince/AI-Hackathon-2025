
import React from 'react';

const TopBar = ({ onNavigate, toggleTheme, theme, currentView }) => {

  const styles = {
    topBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        background: theme.cardBg,
        color: theme.text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 25px',
        boxShadow: `0 2px 5px rgba(0,0,0,${theme.background === '#1a1a1d' ? '0.3' : '0.08'})`,
        borderBottom: `1px solid ${theme.borderColor}`,
        zIndex: 1000,
        fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.primary,
        cursor: 'pointer',
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        cursor: 'pointer',
        fontWeight: '600',
        padding: '8px 12px',
        borderRadius: '6px',
        transition: 'all 0.2s ease',
        fontSize: '0.95rem',
    },
    navLinkActive: {
        background: theme.primary,
        color: theme.cardBg,
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    themeToggle: {
        cursor: 'pointer',
        background: theme.inputBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '20px',
        padding: '4px',
        width: '50px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
    },
    themeToggleKnob: {
        height: '20px',
        width: '20px',
        background: theme.textSecondary,
        borderRadius: '50%',
        transition: 'transform 0.3s ease',
        transform: theme.background === '#1a1a1d' ? 'translateX(22px)' : 'translateX(0)',
    }
  };

  const menuItems = [
    { id: 'chapter-selection', title: 'Story' },
    { id: 'portfolio', title: 'Simulator' },
    { id: 'stonks-minigame', title: 'Minigame' },
    { id: 'leaderboard', title: 'Ranks' },
    { id: 'ai-assistants', title: 'AI Advisors' }
  ];

  return (
    <div style={styles.topBar}>
      <div style={styles.logo} onClick={() => onNavigate('rpg-menu')}>StonkSim</div>
      <div style={styles.navLinks}>
        {menuItems.map(item => {
            const isActive = currentView === item.id;
            return (
                <div 
                    key={item.id} 
                    style={{...styles.navLink, ...(isActive ? styles.navLinkActive : {})}} 
                    onClick={() => onNavigate(item.id)}
                >
                    {item.title}
                </div>
            )
        })}
      </div>
      <div style={styles.rightSection}>
        <div style={styles.themeToggle} onClick={toggleTheme}>
            <div style={styles.themeToggleKnob}></div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
