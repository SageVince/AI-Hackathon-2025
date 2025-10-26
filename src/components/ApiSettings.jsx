
import React, { useState, useEffect } from 'react';

const ApiSettings = ({ backToGrid, theme, apiKey, apiProvider, model, onApiSettingsChange }) => {

    const [localApiKey, setLocalApiKey] = useState(apiKey);
    const [localApiProvider, setLocalApiProvider] = useState(apiProvider.toLowerCase());
    const [localModel, setLocalModel] = useState(model);
    const [availableModels, setAvailableModels] = useState([]);
    const [fetchingModels, setFetchingModels] = useState(false);


    useEffect(() => {
        const currentProvider = localApiProvider.toLowerCase();
        // Reset model and available models if provider changes
        setAvailableModels([]);
        if (currentProvider === 'google') {
            setLocalModel('gemini-1.5-pro');
        } else if (currentProvider === 'openai') {
            setLocalModel('gpt-3.5-turbo');
        } else if (currentProvider === 'ollama') {
            setLocalModel('llama2');
        }
    }, [localApiProvider]);

    const fetchModels = async () => {
        setFetchingModels(true);
        let endpoint = '';
        let headers = {};

        if (localApiProvider === 'google') {
            endpoint = `https://generativelanguage.googleapis.com/v1beta/models?key=${localApiKey}`;
        } else if (localApiProvider === 'openai') {
            endpoint = `https://api.openai.com/v1/models`;
            headers['Authorization'] = `Bearer ${localApiKey}`;
        } else if (localApiProvider === 'ollama') {
            endpoint = `http://localhost:11434/api/tags`;
        }

        try {
            const response = await fetch(endpoint, { headers });
            if (!response.ok) {
                throw new Error(`Failed to fetch models: ${response.statusText}`);
            }
            const data = await response.json();

            let models = [];
            if (localApiProvider === 'google') {
                models = data.models.map(m => m.name.replace('models/', '')).filter(m => m.includes('gemini'));
            } else if (localApiProvider === 'openai') {
                models = data.data.map(m => m.id).filter(m => m.includes('gpt'));
            } else if (localApiProvider === 'ollama') {
                models = data.models.map(m => m.name);
            }
            setAvailableModels(models);
            if (models.length > 0) {
                setLocalModel(models[0]);
            }
        } catch (error) {
            console.error("Error fetching models:", error);
            alert("Failed to fetch models. Please check your API key and network connection.");
        }

        setFetchingModels(false);
    };

    const handleSave = () => {
        onApiSettingsChange({
            key: localApiKey,
            provider: localApiProvider,
            model: localModel,
        });
        backToGrid();
    };

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
            justifyContent: 'space-between',
            alignItems: 'center',
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
                <select id="api-provider" value={localApiProvider} onChange={e => setLocalApiProvider(e.target.value)} style={styles.select}>
                    <option value="google">Google</option>
                    <option value="openai">OpenAI</option>
                    <option value="ollama">Ollama</option>
                </select>
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="api-key" style={styles.label}>API Key</label>
                <input 
                    type="password" // Hide the key for security
                    id="api-key" 
                    style={styles.input} 
                    value={localApiKey} 
                    onChange={e => setLocalApiKey(e.target.value)} 
                    placeholder="Enter your API key here"
                />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="model-select" style={styles.label}>Model</label>
                <div style={{display: 'flex', gap: '10px'}}>
                    <select id="model-select" value={localModel} onChange={e => setLocalModel(e.target.value)} style={{...styles.select, flex: 1}}>
                        {availableModels.length > 0 ? (
                            availableModels.map(m => <option key={m} value={m}>{m}</option>)
                        ) : (
                            <option value={localModel}>{localModel}</option>
                        )}
                    </select>
                    <button onClick={fetchModels} disabled={fetchingModels} style={{...styles.button, padding: '10px 15px', background: theme.primary, color: 'white'}}>
                        {fetchingModels ? 'Fetching...' : 'Get Models'}
                    </button>
                </div>
            </div>


            <div style={styles.buttonContainer}>
                <button style={{...styles.button, background: theme.textSecondary, color: theme.background}} onClick={backToGrid}>Cancel</button>
                <button style={{...styles.button, background: theme.primary, color: 'white'}} onClick={handleSave}>Save & Return</button>
            </div>
        </div>
    </div>
  );
};

export default ApiSettings;
