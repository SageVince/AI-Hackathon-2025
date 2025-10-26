
import React from 'react';

const Options = ({ theme }) => {

    const styles = {
        container: {
            padding: '20px',
            background: theme.cardBg,
            borderRadius: '12px',
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: theme.primary,
            marginBottom: '20px',
        },
        message: {
            fontSize: '1.2rem',
            color: theme.textSecondary,
            textAlign: 'center',
            lineHeight: '1.6',
            maxWidth: '600px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Options Trading Coming Soon!</h2>
            <p style={styles.message}>
                Get ready to take your trading to the next level with options! 
                This feature is under active development and will be available shortly.
            </p>
        </div>
    );
};

export default Options;
