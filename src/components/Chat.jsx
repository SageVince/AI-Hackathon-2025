
import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ assistant, backToAssistants, theme, apiKey, apiProvider, model, systemPrompt }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

  const callGenerativeApi = async (userMessage, prompt, key, provider, model) => {
    setLoading(true);

    if (provider !== 'ollama' && !key) {
        setLoading(false);
        return "It looks like you haven't entered an API key. Please go to the API Key Settings and enter a valid key for your selected provider.";
    }

    let endpoint = '';
    const headers = { 'Content-Type': 'application/json' };
    let body = {};

    switch (provider) {
        case 'google':
            endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
            body = {
                contents: [{
                    parts: [{ text: `${prompt}\n\nUser: ${userMessage}` }]
                }]
            };
            break;
        case 'openai':
            endpoint = `https://api.openai.com/v1/chat/completions`;
            headers['Authorization'] = `Bearer ${key}`;
            body = {
                model: model,
                messages: [
                    { role: 'system', content: prompt },
                    { role: 'user', content: userMessage }
                ]
            };
            break;
        case 'ollama':
            endpoint = `http://localhost:11434/api/generate`;
            body = {
                model: model,
                prompt: `${prompt}\n\nUser: ${userMessage}`,
                stream: false
            };
            break;
        default:
            setLoading(false);
            return "Invalid API provider selected.";
    }

    try {
        const response = await fetch(endpoint, { 
            method: 'POST', 
            headers, 
            body: JSON.stringify(body) 
        });

        if (!response.ok) {
            if (response.status === 401) {
                return "Authentication failed. Please check your API key in the settings. It seems to be invalid or missing permissions.";
            }
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const data = await response.json();
        let aiResponse = '';

        switch (provider) {
            case 'google':
                aiResponse = data.candidates[0].content.parts[0].text;
                break;
            case 'openai':
                aiResponse = data.choices[0].message.content;
                break;
            case 'ollama':
                aiResponse = data.response;
                break;
        }

        return aiResponse;

    } catch (error) {
        console.error("API call error:", error);
        return `Sorry, I ran into an error trying to connect to the AI service. Please check the console and make sure the service is running at ${endpoint}`;
    } finally {
        setLoading(false);
    }
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

      const aiResponse = await callGenerativeApi(currentInput, systemPrompt, apiKey, apiProvider, model);

      setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'assistant' }]);
    }
  };
  
  return (
     <div style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', background: theme.background, color: theme.text}}>
      <div style={{display: 'flex', alignItems: 'center', padding: '10px 20px', background: theme.cardBg, borderBottom: `1px solid ${theme.borderColor}`}}>
        <button onClick={backToAssistants} style={{background: 'none', border: 'none', color: theme.text, fontSize: '1.5rem', cursor: 'pointer', marginRight: '15px'}}>&larr;</button>
        {assistant && <div style={{display: 'flex', alignItems: 'center'}}><img src={assistant.img} alt={assistant.name} style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px', objectPosition: (assistant.name === 'Pork Bondy' || assistant.name === 'Snoop Dogg') ? 'top' : 'center'}} /><h2 style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{assistant.name}</h2></div>}
      </div>
      <div style={{flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px'}}>
        {messages.map((msg, index) => <div key={index} style={{padding: '10px 15px', maxWidth: '70%', lineHeight: '1.4', ...(msg.sender === 'user' ? {background: theme.primary, color: 'white', alignSelf: 'flex-end', borderRadius: '15px 15px 0 15px'} : {background: theme.cardBg, color: theme.text, alignSelf: 'flex-start', border: `1px solid ${theme.borderColor}`, borderRadius: '15px 15px 15px 0'}) }}>{msg.text}</div>)}
        {loading && <div style={{padding: '10px 15px', maxWidth: '70%', lineHeight: '1.4', background: theme.cardBg, color: theme.text, alignSelf: 'flex-start', border: `1px solid ${theme.borderColor}`, borderRadius: '15px 15px 15px 0'}}><i>Typing...</i></div>}
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
