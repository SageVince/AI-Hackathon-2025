
import React from 'react';

const ApiSettings = ({ backToGrid, theme, apiKey, setApiKey, apiProvider, setApiProvider }) => {

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsBox: {
        background: theme.cardBg,
        padding: '40px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        width: '100%',
        maxWidth: '600px',
        boxShadow: `0 8px 16px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.3 : 0.1})`,
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: theme.primary,
        textAlign: 'center',
        marginBottom: '30px',
    },
    formGroup: {
        marginBottom: '25px',
    },
    label: {
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `1px solid ${theme.borderColor}`,
        background: theme.inputBg,
        color: theme.text,
        fontSize: '1rem',
        boxSizing: 'border-box',
    },
    select: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `1px solid ${theme.borderColor}`,
        background: theme.inputBg,
        color: theme.text,
        fontSize: '1rem',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '15px',
        marginTop: '30px',
    },
    button: {
        padding: '12px 25px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
        <div style={styles.settingsBox}>
            <h1 style={styles.title}>API Settings</h1>
            
            <div style={styles.formGroup}>
                <label htmlFor="api-provider" style={styles.label}>API Provider</label>
                <select id="api-provider" value={apiProvider} onChange={e => setApiProvider(e.target.value)} style={styles.select}>
                    <option value="OpenAI">OpenAI</option>
                    <option value="OpenRouter">OpenRouter</option>
                    <option value="Ollama">Ollama</option>
                    <option value="Google">Google</option>
                </select>
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="api-key" style={styles.label}>API Key</label>
                <input 
                    type="password" // Hide the key for security
                    id="api-key" 
                    style={styles.input} 
                    value={apiKey} 
                    onChange={e => setApiKey(e.target.value)} 
                    placeholder="Enter your API key here"
                />
            </div>

            <div style={styles.buttonContainer}>
                <button style={{...styles.button, background: theme.textSecondary, color: theme.background}} onClick={backToGrid}>Cancel</button>
                <button style={{...styles.button, background: theme.primary, color: 'white'}} onClick={backToGrid}>Save & Return</button>
            </div>
        </div>
    </div>
  );
};

export default ApiSettings;
