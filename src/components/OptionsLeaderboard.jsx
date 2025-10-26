
import React from 'react';

const OptionsLeaderboard = ({ backToMenu, theme }) => {
    // Mock data for the leaderboard
    const leaderboardData = [
        { rank: 1, name: 'CryptoKing', score: 150000, details: 'Won big on a risky SPY call' },
        { rank: 2, name: 'TheOracle', score: 125000, details: 'Consistently profitable with covered calls' },
        { rank: 3, name: 'IronCondor', score: 110000, details: 'Master of the iron condor strategy' },
        { rank: 4, name: 'DiamondHands', score: 95000, details: 'Held onto a call option for a massive gain' },
        { rank: 5, name: 'VegaVisionary', score: 80000, details: 'Expert at profiting from changes in volatility' },
    ];

    const styles = {
        container: {
            padding: '40px',
            background: theme.background,
            color: theme.text,
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            minHeight: '100vh',
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: theme.primary,
            marginBottom: '40px',
        },
        leaderboard: {
            margin: '0 auto',
            width: '80%',
            maxWidth: '1000px',
            borderCollapse: 'collapse',
        },
        header: {
            background: theme.primary,
            color: 'white',
            fontSize: '1.2rem',
        },
        cell: {
            padding: '15px 20px',
            borderBottom: `1px solid ${theme.borderColor}`,
        },
        userRow: {
            background: theme.cardBg,
            fontWeight: 'bold',
            border: `2px solid ${theme.primary}`,
        },
        backButton: {
            background: theme.secondary,
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            marginTop: '40px',
            transition: 'background 0.3s ease',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Options Trading Leaderboard</h1>
            <p style={{...styles.cell, color: theme.textSecondary, marginBottom: '30px'}}>Top traders in the options market. (Coming Soon)</p>
            <table style={styles.leaderboard}>
                <thead>
                    <tr>
                        <th style={{...styles.header, ...styles.cell}}>Rank</th>
                        <th style={{...styles.header, ...styles.cell}}>Name</th>
                        <th style={{...styles.header, ...styles.cell}}>Score</th>
                        <th style={{...styles.header, ...styles.cell}}>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((player, index) => (
                        <tr key={index}>
                            <td style={styles.cell}>{player.rank}</td>
                            <td style={styles.cell}>{player.name}</td>
                            <td style={styles.cell}>${player.score.toLocaleString()}</td>
                            <td style={styles.cell}>{player.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={backToMenu} style={styles.backButton}>Back to Main Menu</button>
        </div>
    );
};

export default OptionsLeaderboard;
