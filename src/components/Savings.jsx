
import React, { useState, useEffect } from 'react';

// --- Daily Challenges Data ---
const dailyChallenges = [
    { id: 1, type: 'action', title: "Pack Your Own Lunch", description: "Instead of buying lunch, bring your own. The average lunch out costs $15.", reward: 15 },
    { id: 2, type: 'action', title: "Cancel a Subscription", description: "Review your monthly subscriptions and cancel one you don't use. Average savings: $10/month.", reward: 10 },
    { id: 3, type: 'action', title: "No-Spend Day", description: "Challenge yourself to not spend any money on non-essentials for 24 hours.", reward: 20 },
    { id: 4, type: 'action', title: "Brew Your Own Coffee", description: "Skip the cafe and make your coffee at home. That's an easy $5 saved.", reward: 5 },
    { id: 5, type: 'knowledge', title: "Learn: High-Yield Savings", description: "Read a short article about High-Yield Savings Accounts (HYSAs). Keep 3-6 months of expenses there.", reward: 1 },
    { id: 6, type: 'action', title: "Automate Your Savings", description: "Set up a recurring automatic transfer of $5 from your checking to your savings account.", reward: 5 },
    { id: 7, type: 'knowledge', title: "Learn: The Rule of 72", description: "The Rule of 72 helps you estimate how long it takes for an investment to double. Divide 72 by your interest rate.", reward: 1 },
    { id: 8, type: 'action', title: "Sell Something You Don't Need", description: "List one item on a marketplace like Facebook or eBay. Extra cash and less clutter!", reward: 25 },
    { id: 9, type: 'action', title: "Cook Dinner at Home", description: "Instead of takeout or dining out, cook your dinner tonight.", reward: 20 },
    { id: 10, type: 'knowledge', title: "Learn: Dollar-Cost Averaging", description: "Read about Dollar-Cost Averaging. It is a strategy to invest regularly instead of in lump sums to reduce risk.", reward: 1 },
    { id: 11, type: 'action', title: "Use Public Transit or Walk", description: "If you can, use a cheaper mode of transport for one trip today.", reward: 5 },
    { id: 12, type: 'knowledge', title: "Learn: Roth IRA vs 401(k)", description: "Understand the basics. Roth IRAs grow tax-free; 401(k)s offer pre-tax benefits.", reward: 1 }
];

const Savings = ({ theme }) => {
  const [goal, setGoal] = useState(5000);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [day, setDay] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [todaysChallenge, setTodaysChallenge] = useState(null);

  useEffect(() => {
    if (gameStarted) {
      // Pick a random challenge that hasn't been seen in a while if possible
      // Simple random for now
      setTodaysChallenge(dailyChallenges[Math.floor(Math.random() * dailyChallenges.length)]);
    }
  }, [day, gameStarted]);

  const progress = Math.min((currentSavings / goal) * 100, 100);

  const handleCompleteChallenge = () => {
    setCurrentSavings(currentSavings + todaysChallenge.reward);
    setDay(day + 1);
  };

  const handleSkipDay = () => {
    setDay(day + 1);
  };

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: theme.textSecondary,
        marginBottom: '50px',
    },
    goalSetter: {
        background: theme.cardBg,
        padding: '40px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        maxWidth: '600px',
        margin: '0 auto 50px auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    goalInputLabel: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    goalInput: {
        width: '200px',
        padding: '10px',
        fontSize: '1.5rem',
        textAlign: 'center',
        background: theme.inputBg,
        color: theme.text,
        border: `2px solid ${theme.primary}`,
        borderRadius: '8px',
    },
    button: {
        padding: '12px 25px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: 'transform 0.2s',
    },
    gameContainer: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    progressOverview: {
        background: theme.inputBg,
        borderRadius: '15px',
        height: '30px',
        marginBottom: '30px',
        position: 'relative',
        border: `1px solid ${theme.borderColor}`,
        overflow: 'hidden',
    },
    progressBar: {
        background: theme.primary,
        height: '100%',
        borderRadius: '15px 0 0 15px',
        transition: 'width 0.5s ease-in-out',
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: theme.text,
        fontWeight: 'bold',
        textShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    dayTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    challengeCard: {
        background: theme.cardBg,
        padding: '30px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        textAlign: 'left',
    },
    challengeType: {
        display: 'inline-block',
        padding: '5px 12px',
        borderRadius: '20px',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        textTransform: 'uppercase',
    },
    challengeTitle: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    challengeDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    challengeReward: {
        fontSize: '1rem',
        color: theme.textSecondary,
        marginBottom: '30px',
    },
    challengeActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '15px',
    },
  };

  const renderGame = () => (
    <div style={styles.gameContainer}>
        <div style={styles.progressOverview}>
            <div style={{...styles.progressBar, width: `${progress}%`}}></div>
            <span style={styles.progressText}>${currentSavings.toLocaleString()} / ${goal.toLocaleString()} ({progress.toFixed(1)}%)</span>
        </div>
        <h2 style={styles.dayTitle}>Day {day} of 365</h2>
        {todaysChallenge && (
            <div style={styles.challengeCard}>
                <span style={{...styles.challengeType, background: todaysChallenge.type === 'action' ? theme.primary : '#6c757d'}}>{todaysChallenge.type}</span>
                <h3 style={styles.challengeTitle}>{todaysChallenge.title}</h3>
                <p style={styles.challengeDescription}>{todaysChallenge.description}</p>
                <p style={styles.challengeReward}>Potential Savings: <strong>${todaysChallenge.reward}</strong></p>
                <div style={styles.challengeActions}>
                    <button style={{...styles.button, background: theme.textSecondary, color: 'white'}} onClick={handleSkipDay}>Skip Day</button>
                    <button style={{...styles.button, background: theme.primary, color: 'white'}} onClick={handleCompleteChallenge}>Complete & Save ${todaysChallenge.reward}</button>
                </div>
            </div>
        )}
    </div>
  );

  const renderGoalSetter = () => (
     <div style={styles.goalSetter}>
          <div style={styles.goalInputLabel}>My 1-Year Savings Goal:</div>
          <div>
            <span style={{fontSize: '1.5rem', marginRight: '10px'}}>$</span>
            <input 
                type="number"
                style={styles.goalInput}
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
                placeholder="5,000"
            />
          </div>
          <button style={{...styles.button, background: theme.primary, color: 'white', marginTop: '30px', fontSize: '1.2rem'}} onClick={() => setGameStarted(true)}>Start the 365-Day Challenge</button>
      </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Financial Journey</h1>
      <p style={styles.subtitle}>{gameStarted ? "Complete daily challenges to reach your goal!" : "Set a goal to start your 365-day savings challenge."}</p>
      {gameStarted ? renderGame() : renderGoalSetter()}
    </div>
  );
};

export default Savings;
