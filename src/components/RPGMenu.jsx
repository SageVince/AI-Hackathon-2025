
import React from 'react';

const RPGMenu = ({ onNavigate, theme }) => {

  const styles = {
    container: {
        background: theme.background,
        color: theme.text,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
        padding: '20px',
    },
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '50px',
        textShadow: theme.background === '#1a1a1d' ? `0 0 10px ${theme.primary}, 0 0 20px ${theme.primary}` : 'none',
    },
    menu: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '25px',
        width: '100%',
        maxWidth: '800px',
    },
    menuItem: {
        background: theme.cardBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '12px',
        padding: '25px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`,
    },
    menuItemHover: {
        transform: 'translateY(-5px)',
        borderColor: theme.primary,
        boxShadow: `0 10px 15px rgba(0, 170, 255, ${theme.background === '#1a1a1d' ? 0.3 : 0.1})`,
    },
    itemTitle: {
        fontSize: '1.8rem',
        fontWeight: '600',
        color: theme.primary,
        marginBottom: '10px',
    },
    itemDescription: {
        fontSize: '1rem',
        color: theme.textSecondary,
        lineHeight: 1.5,
    }
  };

  const handleMouseEnter = (e) => {
      Object.assign(e.currentTarget.style, styles.menuItemHover);
  };

  const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.borderColor = theme.borderColor;
      e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`;
  };

  const menuItems = [
      { id: 'chapter-selection', title: 'Story Mode', description: 'Engage in a narrative journey to learn the basics of financial literacy.' },
      { id: 'portfolio', title: 'Portfolio Simulator', description: 'Test your investment strategies in a live, simulated market.' },
      { id: 'stonks-minigame', title: 'Stonks! The Minigame', description: 'Play a fast-paced arcade game to earn extra capital for your portfolio.' },
      { id: 'leaderboard', title: 'Leaderboard', description: 'See how your portfolio performance ranks against other players.' },
      { id: 'ai-assistants', title: 'AI Advisors', description: 'Chat with futuristic AI assistants to get investment advice and insights.' },
      { id: 'savings', title: 'Savings Challenge', description: 'Learn to save money through a fun, gamified 365-day challenge.' },
      { id: 'knowledge', title: 'Knowledge Base', description: 'Expand your financial literacy with articles and lessons on key topics.' }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stonk Simulator</h1>
      <div style={styles.menu}>
        {menuItems.map(item => (
            <div key={item.id} style={styles.menuItem} onClick={() => onNavigate(item.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h2 style={styles.itemTitle}>{item.title}</h2>
                <p style={styles.itemDescription}>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RPGMenu;
