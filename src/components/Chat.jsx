
import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ assistant, backToAssistants, theme, apiKey, apiProvider, systemPrompt }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

  // This function simulates a call to a generative AI API
  const callSimulatedApi = async (userMessage, prompt, key, provider) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    setLoading(false);

    if (!key) {
        return "It looks like you haven't entered an API key. Please go to the API Key Settings and enter a valid key for your selected provider.";
    }

    const lowerMessage = userMessage.toLowerCase();
    let response = `(Simulated response from ${provider} based on the persona of ${assistant.name}). `;

    if (prompt.toLowerCase().includes('stonk pork')) {
        if (lowerMessage.includes('crypto')) response += "Crypto is a wild ride, buckle up! High risk, high reward. We gotta be smart about it.";
        else if (lowerMessage.includes('stocks')) response += "Ah, stocks, my bread and butter! It's all about finding those hidden gems before they pop.";
        else response += "Tell me what financial frontier you want to explore. Let's get this bread!";
    }
     else if (prompt.toLowerCase().includes('samuel l. jackson')) {
        if (lowerMessage.includes('capital one')) response += "It's a no-brainer! Capital One 360 Savings is the real deal. Simple, effective, no games. That's how you handle your money.";
        else if (lowerMessage.includes('lazy') || lowerMessage.includes('easy')) response += "You want easy? I'll give you easy. Set up automatic transfers to a high-yield savings account. Done. Now stop making excuses.";
        else response += "Alright, enough chit-chat. What's the financial situation? Lay it on me, and I'll give you the straight-up truth.";
    } else {
        response += `I am processing your query: \"${userMessage}\". My core directive is to respond according to my persona. A real AI would now provide a detailed, nuanced answer.`;
    }

    return response;
  };

  useEffect(() => {
    if (assistant) {
      setMessages([ { text: `Hello! I'm ${assistant.name}. ${systemPrompt.split('.')[1]}. How can I help you today?`, sender: 'assistant' } ]);
    }
  }, [assistant, systemPrompt]);

  const handleSend = async () => {
    if (input.trim() && !loading) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      const currentInput = input;
      setInput('');

      const aiResponse = await callSimulatedApi(currentInput, systemPrompt, apiKey, apiProvider);

      setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'assistant' }]);
    }
  };

  const styles = { /* styles remain the same */ };

  return (
    // JSX for chat remains the same, but now it's powered by the simulated API
     <div style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', background: theme.background, color: theme.text}}>
      <div style={{display: 'flex', alignItems: 'center', padding: '10px 20px', background: theme.cardBg, borderBottom: `1px solid ${theme.borderColor}`}}>
        <button onClick={backToAssistants} style={{background: 'none', border: 'none', color: theme.text, fontSize: '1.5rem', cursor: 'pointer', marginRight: '15px'}}>&larr;</button>
        {assistant && <div style={{display: 'flex', alignItems: 'center'}}><img src={assistant.img} alt={assistant.name} style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px', objectPosition: (assistant.name === 'Pork Bondy' || assistant.name === 'Snoop Dogg') ? 'top' : 'center'}} /><h2 style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{assistant.name}</h2></div>}
      </div>
      <div style={{flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px'}}>
        {messages.map((msg, index) => <div key={index} style={{padding: '10px 15px', borderRadius: '15px', maxWidth: '70%', lineHeight: '1.4', ...(msg.sender === 'user' ? {background: theme.primary, color: 'white', alignSelf: 'flex-end', borderRadius: '15px 15px 0 15px'} : {background: theme.cardBg, color: theme.text, alignSelf: 'flex-start', border: `1px solid ${theme.borderColor}`, borderRadius: '15px 15px 15px 0'}) }}>{msg.text}</div>)}
        {loading && <div style={{padding: '10px 15px', borderRadius: '15px', maxWidth: '70%', lineHeight: '1.4', background: theme.cardBg, color: theme.text, alignSelf: 'flex-start', border: `1px solid ${theme.borderColor}`, borderRadius: '15px 15px 15px 0'}}><i>Typing...</i></div>}
        <div ref={messagesEndRef} />
      </div>
      <div style={{display: 'flex', padding: '20px', borderTop: `1px solid ${theme.borderColor}`, background: theme.cardBg}}>
        <input type="text" style={{flex: 1, padding: '10px 15px', borderRadius: '20px', border: `1px solid ${theme.borderColor}`, background: theme.inputBg, color: theme.text, fontSize: '1rem', marginRight: '10px'}} value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask a financial question..." />
        <button style={{padding: '10px 20px', borderRadius: '20px', border: 'none', background: theme.primary, color: 'white', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold'}} onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
