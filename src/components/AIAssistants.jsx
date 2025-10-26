
import React, { useState } from 'react';
import cyberSageImg from '../assets/cybersage.png';
import whaleWhispererImg from '../assets/thewhalewhisperer.png';
import ecuadorKnucklesImg from '../assets/ecuadorianknuckles.jpg';

const AIAssistants = ({ theme }) => {
  const [selectedAssistant, setSelectedAssistant] = useState(null);
  const [apiModel, setApiModel] = useState('gemini-1.5-pro');
  const [prompts, setPrompts] = useState({
    'Cyber Sage': 'You are a futuristic, data-driven AI that speaks in technical, precise language. You deliver insights on blockchain, crypto, and decentralized finance. Your tone is analytical and forward-looking.',
    'The Whale Whisperer': 'You are a wise, seasoned investor who has seen many market cycles. You speak in metaphors and analogies, drawing lessons from history. Your tone is calm, patient, and philosophical.',
    'Ecuador Knuckles': 'You are an adventurous, high-energy trader who knows \'da whey\' to long-term gains. You are enthusiastic and encouraging, with a focus on index funds and sustainable growth.',
  });

  const assistants = [
    {
      name: 'Cyber Sage',
      img: cyberSageImg,
      description: 'The master of crypto and decentralized finance. Provides cutting-edge insights on digital assets and blockchain technology.',
    },
    {
      name: 'The Whale Whisperer',
      img: whaleWhispererImg,
      description: 'The seasoned veteran of market cycles. Offers timeless wisdom on long-term strategy, risk management, and market psychology.',
    },
    {
      name: 'Ecuador Knuckles',
      img: ecuadorKnucklesImg,
      description: 'The energetic guide to \'da whey\' of index funds and emerging markets. Focuses on sustainable, long-term growth.',
    },
  ];

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)'
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
    },
    subtitle: {
        fontSize: '1.2rem',
        color: theme.textSecondary,
    },
    apiModelSelector: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '40px',
      gap: '10px',
    },
    apiModelLabel: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: theme.text,
    },
    apiModelDropdown: {
      padding: '8px 12px',
      borderRadius: '8px',
      border: `1px solid ${theme.borderColor}`,
      background: theme.inputBg,
      color: theme.text,
      fontSize: '0.9rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        justifyContent: 'center',
    },
    card: {
        background: theme.cardBg,
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        padding: '25px',
        textAlign: 'center',
        boxShadow: `0 4px 8px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`,
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    cardHover: {
        transform: 'translateY(-5px)',
        boxShadow: `0 10px 20px rgba(0, 170, 255, ${theme.background === '#1a1a1d' ? 0.3 : 0.1})`,
    },
    img: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: `3px solid ${theme.primary}`,
        margin: '0 auto 20px',
    },
    name: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '10px',
    },
    description: {
        fontSize: '1rem',
        color: theme.textSecondary,
        lineHeight: '1.5',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalContent: {
        background: theme.cardBg,
        padding: '30px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '600px',
        border: `1px solid ${theme.borderColor}`,
        textAlign: 'left',
    },
    modalTitle: {
        fontSize: '2rem',
        color: theme.primary,
        marginBottom: '20px',
    },
    promptLabel: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: '10px',
        display: 'block',
    },
    promptTextarea: {
        width: '100%',
        height: '150px',
        background: theme.inputBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '8px',
        padding: '15px',
        fontSize: '1rem',
        color: theme.text,
        resize: 'vertical',
        marginBottom: '20px',
        boxSizing: 'border-box',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
  };

  const handlePromptChange = (name, value) => {
    setPrompts(prev => ({...prev, [name]: value}));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Financial Advisors</h1>
        <p style={styles.subtitle}>Customize your team of digital experts to match your investment style.</p>
      </div>

      <div style={styles.apiModelSelector}>
        <label htmlFor="api-model" style={styles.apiModelLabel}>Select API Model:</label>
        <select id="api-model" value={apiModel} onChange={e => setApiModel(e.target.value)} style={styles.apiModelDropdown}>
            <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
            <option value="gpt-4-turbo">GPT-4 Turbo</option>
            <option value="claude-3-opus">Claude 3 Opus</option>
        </select>
      </div>

      <div style={styles.grid}>
        {assistants.map(assistant => (
          <div 
            key={assistant.name} 
            style={styles.card} 
            onClick={() => setSelectedAssistant(assistant)}
            onMouseEnter={e => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = `0 4px 8px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`;
            }}
          >
            <img src={assistant.img} alt={assistant.name} style={styles.img} />
            <h2 style={styles.name}>{assistant.name}</h2>
            <p style={styles.description}>{assistant.description}</p>
          </div>
        ))}
      </div>

      {selectedAssistant && (
        <div style={styles.modalOverlay} onClick={() => setSelectedAssistant(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>Customize: {selectedAssistant.name}</h2>
            <label htmlFor="prompt" style={styles.promptLabel}>SYSTEM PROMPT:</label>
            <textarea 
              id="prompt"
              style={styles.promptTextarea}
              value={prompts[selectedAssistant.name]}
              onChange={(e) => handlePromptChange(selectedAssistant.name, e.target.value)}
            />
            <div style={styles.buttonContainer}>
                <button 
                    style={{...styles.button, background: theme.textSecondary, color: theme.background}}
                    onClick={() => setSelectedAssistant(null)}
                >Cancel</button>
                <button 
                    style={{...styles.button, background: theme.primary, color: 'white'}}
                    onClick={() => setSelectedAssistant(null)} // In a real app, this would save the changes
                >Save & Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistants;
