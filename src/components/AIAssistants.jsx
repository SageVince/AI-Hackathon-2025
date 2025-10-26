
import React, { useState } from 'react';
import Chat from './Chat';
import ApiSettings from './ApiSettings';
import stonkPorkImg from '../assets/stonkpork.png';
import porkBondyImg from '../assets/porkbondy.png';
import snoopDogImg from '../assets/snoopdog.jpg';
import yapDollarImg from '../assets/yapdollar.jpg';
import johnPorkImg from '../assets/johnpork.png';
import ecuadorKnucklesImg from '../assets/ecuadorianknuckles.jpg';
import cyberSageImg from '../assets/cybersage.png';
import whaleWhispererImg from '../assets/thewhalewhisperer.png';
import yenjiImg from '../assets/yenji.png';
import samuelJacksonImg from '../assets/samueljackson.png';

const AIAssistants = ({ theme, apiKey, apiProvider, model, onApiSettingsChange }) => {
  const [view, setView] = useState('grid'); // grid, chat, settings
  const [selectedAssistant, setSelectedAssistant] = useState(null);
  const [editingAssistant, setEditingAssistant] = useState(null);

  const initialPrompts = {
    'Stonk Pork': 'You are Stonk Pork, a wise, old-money pig who embodies the principles of long-term value investing, in the style of Warren Buffett. You speak in a calm, patient, and sagely tone. You preach the gospel of buying wonderful companies at fair prices, holding for the long term, and understanding the power of compounding. You emphasize discipline, patience, and the importance of a margin of safety. You often use metaphors about planting trees and building generational wealth. You disdain get-rich-quick schemes and speculative gambling, which you refer to as noise. You are here to guide users toward true financial independence through prudent, well-researched investment decisions.',
    'Pork Bondy': 'You are Pork Bondy, an expert in alternative investments. You introduce users to the world of real estate, commodities, art, and other non-traditional assets. You are sophisticated, knowledgeable, and you provide a diversified perspective on building wealth.',
    'Snoop Dogg': 'You are Snoop Dogg, and you\'re here to talk about marketing. You break down the art of building a brand, creating a following, and getting your message out there. You use your own career as a case study, and you speak in your signature laid-back, fo-shizzle style.',
    'Yap Dollar': 'You are Yap Dollar, a hyper-caffeinated, fast-talking trader who lives for the thrill of the market. You\'re obsessed with technical analysis, chart patterns, and catalysts. You believe that speed and information are the keys to winning. You are intense, data-driven, and always looking for the next trade.',
    'John Pork': 'You are John Pork, a mysterious and enigmatic figure in the financial world. You speak in cryptic, often philosophical, riddles. You don\'t give direct advice, but instead offer profound, thought-provoking insights that force the user to think for themselves. Your origins are unknown, but your wisdom is legendary.',
    'Ecuador Knuckles': 'You are Ecuador Knuckles, a treasure hunter who sees the financial markets as a grand adventure. You talk about stocks and investments as if they are ancient artifacts waiting to be discovered. You are adventurous, optimistic, and you believe that fortune favors the bold.',
    'Cyber Sage': 'You are a futuristic, data-driven AI from the year 2077. You see the world in code, algorithms, and probabilities. You provide hyper-logical, data-centric advice, often referencing future technologies and market shifts that haven\'t happened yet. You are precise, analytical, and you see emotions as a market inefficiency.',
    'The Whale Whisperer': 'You are a wise, seasoned investor who has seen it all. You speak in metaphors, often comparing the market to the vast, unpredictable ocean. You are calm, patient, and you have a deep understanding of market psychology. You teach others to read the currents, avoid the storms, and swim with the whales.',
    'Yenji': 'You are Yenji, a brilliant, young, and energetic financial prodigy from Seoul. You are a master of a global markets, and you have a special focus on emerging technologies and Asian economies. You are sharp, fast-paced, and you bring a fresh, international perspective to investing.',
    'Samuel L. Jackson': 'You are Samuel L. Jackson, and you are tired of people making bad financial decisions. You give brutally honest, no-nonsense advice. You are direct, and you are not afraid to call people out. You\'re here to whip people into financial shape, and you\'re not taking any excuses.',
  };

  const [prompts, setPrompts] = useState(initialPrompts);

  const assistants = [ { name: 'Stonk Pork', img: stonkPorkImg, description: 'Preaches discipline, patience, and long-term value investing.' },
  { name: 'Pork Bondy', img: porkBondyImg, description: 'Expert in alternative investments like real estate and commodities.' },
  { name: 'Snoop Dogg', img: snoopDogImg, description: 'Marketing guru who knows how to build a brand.' },
  { name: 'Yap Dollar', img: yapDollarImg, description: 'Hyper-caffeinated technical analyst who lives for the trade.' },
  { name: 'John Pork', img: johnPorkImg, description: 'Mysterious figure who speaks in cryptic, philosophical riddles.' },
  { name: 'Ecuador Knuckles', img: ecuadorKnucklesImg, description: 'Adventurous treasure hunter of the financial markets.' },
  { name: 'Cyber Sage', img: cyberSageImg, description: 'Data-driven AI from the future who sees the world in code.' },
  { name: 'The Whale Whisperer', img: whaleWhispererImg, description: 'Wise, patient investor who reads the currents of the market.' },
  { name: 'Yenji', img: yenjiImg, description: 'Brilliant financial prodigy with a focus on global markets.' },
  { name: 'Samuel L. Jackson', img: samuelJacksonImg, description: 'Brutally honest, no-nonsense advice to whip you into shape.' }, ];

  const handleSaveAndChat = () => {
    setSelectedAssistant(editingAssistant);
    setView('chat');
    setEditingAssistant(null);
  };

  const styles = {
    container: { padding: '50px', background: theme.background, color: theme.text, minHeight: 'calc(100vh - 60px)' },
    header: { textAlign: 'center', marginBottom: '20px' },
    title: { fontSize: '3rem', fontWeight: 'bold', color: theme.primary },
    subtitle: { fontSize: '1.2rem', color: theme.textSecondary, marginBottom: '20px' },
    headerActions: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '40px' },
    apiModelSelector: { display: 'flex', alignItems: 'center', gap: '10px' },
    apiModelLabel: { fontSize: '1rem', fontWeight: 'bold', color: theme.text },
    apiModelDropdown: { padding: '8px 12px', borderRadius: '8px', border: `1px solid ${theme.borderColor}`, background: theme.inputBg, color: theme.text, fontSize: '0.9rem' },
    settingsButton: { padding: '8px 15px', borderRadius: '8px', border: 'none', background: theme.textSecondary, color: theme.background, cursor: 'pointer', fontWeight: 'bold' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', justifyContent: 'center' },
    card: { background: theme.cardBg, borderRadius: '12px', border: `1px solid ${theme.borderColor}`, padding: '25px', textAlign: 'center', boxShadow: `0 4px 8px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' },
    cardHover: { transform: 'translateY(-5px)', boxShadow: `0 10px 20px rgba(0, 170, 255, ${theme.background === '#1a1a1d' ? 0.3 : 0.1})` },
    img: { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${theme.primary}`, margin: '0 auto 20px' },
    name: { fontSize: '1.8rem', fontWeight: 'bold', color: theme.primary, marginBottom: '10px' },
    description: { fontSize: '1rem', color: theme.textSecondary, lineHeight: '1.5' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
    modalContent: { background: theme.cardBg, padding: '30px', borderRadius: '12px', width: '90%', maxWidth: '600px', border: `1px solid ${theme.borderColor}`, textAlign: 'left' },
    modalTitle: { fontSize: '2rem', color: theme.primary, marginBottom: '20px' },
    promptLabel: { fontSize: '1rem', fontWeight: 'bold', color: theme.text, marginBottom: '10px', display: 'block' },
    promptTextarea: { width: '100%', height: '150px', background: theme.inputBg, border: `1px solid ${theme.borderColor}`, borderRadius: '8px', padding: '15px', fontSize: '1rem', color: theme.text, resize: 'vertical', marginBottom: '20px', boxSizing: 'border-box' },
    buttonContainer: { display: 'flex', justifyContent: 'flex-end', gap: '10px' },
    button: { padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  };

  if (view === 'chat') {
    const systemPrompt = prompts[selectedAssistant.name];
    return <Chat assistant={selectedAssistant} backToAssistants={() => setView('grid')} theme={theme} apiKey={apiKey} apiProvider={apiProvider} model={model} systemPrompt={systemPrompt} />;
  }
  
  if (view === 'settings') {
      return <ApiSettings backToGrid={() => setView('grid')} theme={theme} apiKey={apiKey} apiProvider={apiProvider} model={model} onApiSettingsChange={onApiSettingsChange} />
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Financial Advisors</h1>
        <p style={styles.subtitle}>Your team of digital experts. Powered by the AI of your choice.</p>
      </div>

      <div style={styles.headerActions}>
        <div style={styles.apiModelSelector}>
            <label htmlFor="api-model" style={styles.apiModelLabel}>Provider:</label>
            <p style={{fontSize: '1rem', fontWeight: 'normal'}}>{apiProvider} | Model: {model}</p>
        </div>
        <button onClick={() => setView('settings')} style={styles.settingsButton}>API Key Settings</button>
      </div>

      <div style={styles.grid}>{assistants.map(assistant => <div key={assistant.name} style={styles.card} onClick={() => setEditingAssistant(assistant)} onMouseEnter={e => Object.assign(e.currentTarget.style, styles.cardHover)} onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 4px 8px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`; }}> <img src={assistant.img} alt={assistant.name} style={{ ...styles.img, objectPosition: (assistant.name === 'Pork Bondy' || assistant.name === 'Snoop Dogg') ? 'top' : 'center' }} /> <h2 style={styles.name}>{assistant.name}</h2> <p style={styles.description}>{assistant.description}</p> </div>)}</div>

      {editingAssistant && (
        <div style={styles.modalOverlay} onClick={() => setEditingAssistant(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>Customize: {editingAssistant.name}</h2>
            <label htmlFor="prompt" style={styles.promptLabel}>SYSTEM PROMPT:</label>
            <textarea id="prompt" style={styles.promptTextarea} value={prompts[editingAssistant.name]} onChange={(e) => setPrompts(prev => ({...prev, [editingAssistant.name]: e.target.value}))} />
            <div style={styles.buttonContainer}>
                <button style={{...styles.button, background: theme.textSecondary, color: theme.background}} onClick={() => setEditingAssistant(null)}>Cancel</button>
                <button style={{...styles.button, background: theme.primary, color: 'white'}} onClick={handleSaveAndChat}>Save & Chat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistants;
