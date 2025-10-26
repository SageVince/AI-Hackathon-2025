
import React, { useMemo } from 'react';

// --- Fake Leaderboard Data ---
const initialLeaderboardData = [
  { rank: 1, name: 'CryptoKing', score: 152300 },
  { rank: 2, name: 'StonkMaster', score: 148900 },
  { rank: 3, name: 'YenJu', score: 145200 },
  { rank: 4, name: 'PorkBondy', score: 139800 },
  { rank: 5, name: 'TheWhaleWhisperer', score: 135400 },
  { rank: 6, name: 'CyberSage', score: 128700 },
  { rank: 7, name: 'Samuel Jackson', score: 121300 },
  { rank: 8, name: 'Snoop Dogg', score: 119500 },
  { rank: 9, name: 'John Pork', score: 112000 },
];

const Leaderboard = ({ backToMenu, userHighScore = 0, theme }) => {

  const rankedData = useMemo(() => {
    const userEntry = { name: 'You', score: userHighScore, isUser: true };

    if (userHighScore === 0) {
        const withoutUser = initialLeaderboardData.map((p, i) => ({...p, rank: i + 1}));
        return [...withoutUser, {...userEntry, rank: withoutUser.length + 1}];
    }

    const combined = [...initialLeaderboardData, userEntry];
    const sorted = combined.sort((a, b) => b.score - a.score);
    return sorted.map((player, index) => ({ ...player, rank: index + 1 }));

  }, [userHighScore]);


  const styles = {
    container: {
      background: theme.background,
      color: theme.text,
      minHeight: 'calc(100vh - 60px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      fontFamily: `'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif`,
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: theme.primary,
      marginBottom: '40px',
    },
    card: {
      width: '100%',
      maxWidth: '700px',
      background: theme.cardBg,
      borderRadius: '12px',
      padding: '20px',
      boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`,
      border: `1px solid ${theme.borderColor}`,
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      padding: '15px',
      borderBottom: `2px solid ${theme.borderColor}`,
      color: theme.textSecondary,
      fontSize: '1rem',
      textTransform: 'uppercase',
    },
    tr: {
        // Base table row style is default
    },
    userRow: {
        background: theme.lessonBg, // Use a distinct but theme-appropriate background
        fontWeight: 'bold',
    },
    td: {
      padding: '15px',
      borderBottom: `1px solid ${theme.borderColor}`,
      fontSize: '1.1rem',
      color: theme.text,
    },
    rank: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: theme.primary,
    },
    backButton: {
      margin: '40px auto 0',
      padding: '12px 25px',
      background: theme.primary,
      color: theme.cardBg,
      border: 'none', 
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Leaderboard</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Rank</th>
              <th style={styles.th}>Player</th>
              <th style={styles.th}>High Score</th>
            </tr>
          </thead>
          <tbody>
            {rankedData.map((player) => (
              <tr key={player.rank} style={player.isUser ? styles.userRow : styles.tr}>
                <td style={{...styles.td, ...styles.rank}}>{player.rank}</td>
                <td style={styles.td}>{player.name}</td>
                <td style={styles.td}>${player.score.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
