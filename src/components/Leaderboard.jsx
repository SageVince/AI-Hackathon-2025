
import React, { useState, useMemo } from 'react';

// --- CONSTANTS --- //
const INITIAL_CAPITAL = 100000;

// --- MOCK DATA --- //
// Data now uses `score` which represents the FINAL NET WORTH.
// Gain/Loss and Return are derived from this and the INITIAL_CAPITAL.
const stocksLeaderboardData = [
    { name: 'InvestorPro', score: 115200, accolades: ['Achieved a 15.2% return in 90 days'] },
    { name: 'MarketMaven', score: 112500, accolades: ['Successful bet on the tech sector'] },
    { name: 'DividendDiva', score: 109800, accolades: ['Strong returns from dividend stocks'] },
    { name: 'ValueHunter', score: 107500, accolades: ['Found undervalued companies'] },
    { name: 'TheTechnician', score: 105200, accolades: ['Mastered technical analysis'] },
    { name: 'SteadyEddie', score: 103500, accolades: ['Slow and steady wins the race'] },
    { name: 'RiskTaker', score: 98000, accolades: ['A volatile quarter with a slight loss'] },
    { name: 'PaperHands', score: 95400, accolades: ['Sold too early'] },
    { name: 'DiamondHands', score: 92100, accolades: ['Held on for too long'] },
];

const optionsLeaderboardData = [
    { name: 'OptionsOracle', score: 175500, accolades: ['75.5% return on a single options trade'] },
    { name: 'ThetaThief', score: 142000, accolades: ['Master of selling options premium'] },
    { name: 'GammaGainer', score: 125000, accolades: ['Capitalized on a huge price swing'] },
    { name: 'VegaVulture', score: 90000, accolades: ['Caught on the wrong side of volatility'] },
    { name: 'RiskyPlayer', score: 75000, accolades: ['A big loss on a speculative bet'] },
];

// --- COMPONENT --- //
const Leaderboard = ({ backToMenu, userHighScore = 0, userAccolades = [], theme }) => {
    const [activeTab, setActiveTab] = useState('stocks');

    const rankedData = useMemo(() => {
        const baseData = activeTab === 'stocks' ? stocksLeaderboardData : optionsLeaderboardData;

        let userEntry = null;
        if (activeTab === 'stocks') {
            userEntry = {
                name: 'You',
                // The score passed in is the final net worth (the "conclusion amount of cash")
                score: userHighScore,
                accolades: userAccolades,
                isUser: true,
            };
        }

        const combinedData = userEntry ? [...baseData, userEntry] : baseData;

        // Sort by final score in descending order
        const sortedData = combinedData
            .sort((a, b) => b.score - a.score)
            .map((player, index) => ({ ...player, rank: index + 1 }));

        return sortedData;

    }, [userHighScore, userAccolades, activeTab]);

    // --- STYLES --- //
    const styles = {
        container: { background: theme.background, color: theme.text, minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', fontFamily: `'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif` },
        title: { fontSize: '3rem', fontWeight: 'bold', color: theme.primary, marginBottom: '20px' },
        tabContainer: { display: 'flex', marginBottom: '30px', background: theme.cardBg, borderRadius: '10px', padding: '5px', border: `1px solid ${theme.borderColor}` },
        tab: { padding: '10px 20px', cursor: 'pointer', fontWeight: '600', borderRadius: '8px', transition: 'background 0.3s, color 0.3s', border: 'none', background: 'transparent', color: theme.textSecondary },
        activeTab: { background: theme.primary, color: 'white' },
        card: { width: '100%', maxWidth: '900px', background: theme.cardBg, borderRadius: '12px', padding: '20px', boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`, border: `1px solid ${theme.borderColor}` },
        table: { width: '100%', borderCollapse: 'collapse' },
        th: { textAlign: 'left', padding: '15px', borderBottom: `2px solid ${theme.borderColor}`, color: theme.textSecondary, fontSize: '0.9rem', textTransform: 'uppercase' },
        userRow: { background: theme.lessonBg, fontWeight: 'bold', boxShadow: `0 0 10px ${theme.primary}` },
        td: { padding: '15px', borderBottom: `1px solid ${theme.borderColor}`, fontSize: '1rem', color: theme.text },
        rank: { fontWeight: 'bold', fontSize: '1.1rem', color: theme.primary },
        profit: { color: theme.success },
        loss: { color: theme.error },
        accoladesList: { listStyle: 'none', margin: 0, padding: 0, fontSize: '0.85rem', color: theme.textSecondary },
        backButton: { margin: '40px auto 0', padding: '12px 25px', background: theme.primary, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'transform 0.2s' },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Leaderboard</h1>
            <div style={styles.tabContainer}>
                <button style={{ ...styles.tab, ...(activeTab === 'stocks' ? styles.activeTab : {}) }} onClick={() => setActiveTab('stocks')}>Stock Trading</button>
                <button style={{ ...styles.tab, ...(activeTab === 'options' ? styles.activeTab : {}) }} onClick={() => setActiveTab('options')}>Options Trading</button>
            </div>

            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Rank</th>
                            <th style={styles.th}>Player</th>
                            <th style={styles.th}>Final Net Worth</th>
                            <th style={styles.th}>Gain/Loss</th>
                            <th style={styles.th}>Return</th>
                            <th style={styles.th}>{activeTab === 'stocks' ? 'Accolades' : 'Details'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankedData.map((player) => {
                            // Determine the score to use. If the user hasn't played, show the starting capital.
                            const finalNetWorth = (player.isUser && player.score === 0) ? INITIAL_CAPITAL : player.score;
                            
                            // CALCULATIONS: All metrics are now derived from the final net worth.
                            const gainOrLoss = finalNetWorth - INITIAL_CAPITAL;
                            const percentageReturn = (gainOrLoss / INITIAL_CAPITAL) * 100;
                            
                            const profitStyle = gainOrLoss >= 0 ? styles.profit : styles.loss;
                            const isUserAndNotPlayed = player.isUser && player.score === 0;

                            return (
                                <tr key={player.rank} style={player.isUser ? styles.userRow : {}}>
                                    <td style={{ ...styles.td, ...styles.rank }}>{player.rank}</td>
                                    <td style={styles.td}>{player.name}</td>
                                    <td style={styles.td}>${Math.round(finalNetWorth).toLocaleString()}</td>
                                    <td style={{ ...styles.td, ...profitStyle }}>
                                        {isUserAndNotPlayed ? 'N/A' : `${gainOrLoss >= 0 ? '+' : ''}${Math.round(gainOrLoss).toLocaleString()}`}
                                    </td>
                                    <td style={{ ...styles.td, ...profitStyle }}>
                                        {isUserAndNotPlayed ? 'N/A' : `${percentageReturn.toFixed(2)}%`}
                                    </td>
                                    <td style={styles.td}>
                                        {isUserAndNotPlayed ? 
                                            (activeTab === 'stocks' ? 'Complete the simulation to rank!' : 'Options trading coming soon!') :
                                            <ul style={styles.accoladesList}>
                                                {player.accolades.map((accolade, i) => <li key={i}>{accolade}</li>)}
                                            </ul>
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <button onClick={backToMenu} style={styles.backButton}>Back to Main Menu</button>
        </div>
    );
};

export default Leaderboard;
