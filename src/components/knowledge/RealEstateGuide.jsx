
import React from 'react';

const RealEstateGuide = ({ theme, onBack, expertImg, expertName }) => {

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
    },
    backButton: {
        background: 'none',
        border: 'none',
        color: theme.primary,
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginBottom: '30px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    expertImage: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: `3px solid ${theme.primary}`,
        objectFit: 'cover',
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: theme.textSecondary,
        marginBottom: '50px',
        fontStyle: 'italic',
    },
    section: {
        marginBottom: '40px',
    },
    sectionTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '20px',
        borderBottom: `2px solid ${theme.primary}`,
        paddingBottom: '10px',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    listItem: {
        background: theme.cardBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        fontSize: '1.1rem',
        lineHeight: '1.8',
    }
  };

  return (
    <div style={styles.container}>
        <button style={styles.backButton} onClick={onBack}>&larr; Back to Knowledge Base</button>
        <div style={styles.header}>
            {expertImg && <img src={expertImg} alt={expertName} style={styles.expertImage} />}
            <h1 style={styles.title}>The Treasure Hunter's Guide to Real Estate</h1>
        </div>
        <p style={styles.subtitle}>With your guide, Ecuador Knuckles!</p>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Why Real Estate is the Ultimate Treasure</h2>
            <p style={styles.paragraph}>
                Ahoy there, treasure hunter! Forget dusty old maps and ancient ruins. The greatest treasures of the modern world are made of brick and mortar! Real estate is where the real adventure begins. You can generate a steady stream of gold (rental income), and the value of your discovery can grow over time (appreciation). Plus, there are hidden paths to tax advantages!
            </p>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Treasure Map: Ways to Invest</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>Claim Your Territory (Rental Properties):</strong> This is the classic adventure! You find a prime piece of land, build your fortress (or buy one!), and find loyal subjects (tenants) to pay you tribute.</li>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>The Quick Flip (Flipping Houses):</strong> For the daring adventurer! You swoop in on a distressed property, use your skills to restore it to its former glory, and then sell it to the highest bidder for a quick profit. High risk, high reward!</li>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>Join a Guild (REITs):</strong> Don't have enough gold for a solo expedition? Join a powerful guild of investors! REITs allow you to own a piece of massive treasures—shopping malls, castles (office buildings), and more—without getting your hands dirty.</li>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>Assemble Your Crew (Crowdfunding):</strong> Gather your mates and pool your resources to conquer a property you couldn't afford on your own. Teamwork makes the dream work!</li>
            </ul>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Deciphering the Hieroglyphs: Key Metrics</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>The Golden Ratio (Cap Rate):</strong> This tells you how much gold your treasure is producing relative to its price. A higher cap rate often means a more profitable discovery.</li>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>The River of Riches (Cash Flow):</strong> This is the flow of gold coins into your pockets each month after all your expenses and debts are paid. Keep the river flowing!</li>
                <li style={styles.listItem}><strong style={{color: theme.primary}}>The Legendary Growth (Appreciation):</strong> This is the magic of real estate! Over time, your discovered land becomes more and more valuable, without you lifting a finger.</li>
            </ul>
        </div>

        <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Beware of Traps and Curses!</h2>
            <p style={styles.paragraph}>
                Every adventure has its risks! Your property might sit empty (vacancies), cursed with unexpected repairs, or you might find it hard to sell when you need the gold. Don't start your adventure without a sizable treasure chest for emergencies!
            </p>
        </div>
    </div>
  );
};

export default RealEstateGuide;
