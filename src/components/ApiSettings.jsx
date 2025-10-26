
import React, { useState, useEffect, useCallback } from 'react';

const ApiSettings = ({ backToGrid, theme, apiKey, apiProvider, model, onApiSettingsChange }) => {

    const [localApiKey, setLocalApiKey] = useState(apiKey);
    const [localApiProvider, setLocalApiProvider] = useState(apiProvider.toLowerCase());
    const [localModel, setLocalModel] = useState(model);
    const [availableModels, setAvailableModels] = useState([]);
    const [fetchingModels, setFetchingModels] = useState(false);

    const fetchModels = useCallback(async () => {
        setFetchingModels(true);
        let endpoint = '';
        let headers = {};
        const provider = localApiProvider.toLowerCase();

        if (provider === 'google') {
            if (!localApiKey) {
                alert("Please enter a Google API Key.");
                setFetchingModels(false);
                return;
            }
            endpoint = `https://generativelanguage.googleapis.com/v1beta/models?key=${localApiKey}`;
        } else if (provider === 'openai') {
            if (!localApiKey) {
                alert("Please enter an OpenAI API Key.");
                setFetchingModels(false);
                return;
            }
            endpoint = `https://api.openai.com/v1/models`;
            headers['Authorization'] = `Bearer ${localApiKey}`;
        } else if (provider === 'ollama') {
            const baseUrl = localApiKey || 'http://localhost:11434';
            endpoint = `${baseUrl}/api/tags`;
        }

        try {
            const response = await fetch(endpoint, { headers });
            if (!response.ok) {
                // Throw the whole response object to be processed in the catch block
                throw response;
            }
            const data = await response.json();

            let models = [];
            if (provider === 'google') {
                models = data.models.map(m => m.name.replace('models/', ''));
            } else if (provider === 'openai') {
                models = data.data.map(m => m.id);
            } else if (provider === 'ollama') {
                models = data.models.map(m => m.name);
            }
            setAvailableModels(models);
            if (models.length > 0 && !models.includes(localModel)) {
                setLocalModel(models[0]);
            }
        } catch (error) {
            setAvailableModels([]); // Clear models on error
            console.error("Error fetching models:", error);

            if (error instanceof Response) {
                // Handle HTTP errors (e.g., 400, 403, 500)
                const errorData = await error.json().catch(() => ({})); // Gracefully handle non-JSON or empty responses
                const detail = (errorData.error && errorData.error.message) || error.statusText;

                if (provider === 'google' && detail.includes('API has not been used')) {
                    alert('ACTION REQUIRED: The "Generative Language API" is not enabled for your Google Cloud project. Please go to the Google Cloud Console, search for this API, and enable it.');
                } else {
                    alert(`Failed to fetch models: ${detail}`);
                }
            } else {
                // Handle network errors (fetch itself failed)
                alert(`Network error: ${error.message}. Please check your connection and the API endpoint for Ollama.`);
            }
        }

        setFetchingModels(false);
    }, [localApiProvider, localApiKey, localModel]);


    useEffect(() => {
        const currentProvider = localApiProvider.toLowerCase();
        setAvailableModels([]);

        if (currentProvider === 'google') {
            setLocalModel(model.includes('gemini') ? model : 'gemini-1.5-pro-latest');
            if (apiProvider.toLowerCase() !== 'google') setLocalApiKey('');
        } else if (currentProvider === 'openai') {
            setLocalModel(model.includes('gpt') ? model : 'gpt-4-turbo');
            if (apiProvider.toLowerCase() !== 'openai') setLocalApiKey('');
        } else if (currentProvider === 'ollama') {
            setLocalModel(model.includes('llama') ? model : 'llama3');
            if (apiProvider.toLowerCase() !== 'ollama') setLocalApiKey('http://localhost:11434');
            fetchModels();
        }
    }, [localApiProvider, model, apiProvider, fetchModels]);

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
                <label htmlFor="api-key" style={styles.label}>
                    {localApiProvider === 'ollama' ? 'Ollama API Base URL' : 'API Key'}
                </label>
                <input 
                    type={localApiProvider === 'ollama' ? 'text' : 'password'}
                    id="api-key" 
                    style={styles.input} 
                    value={localApiKey} 
                    onChange={e => setLocalApiKey(e.target.value)} 
                    placeholder={localApiProvider === 'ollama' ? 'e.g., http://localhost:11434' : 'Enter your API key here'}
                />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="model-select" style={styles.label}>Model</label>
                <div style={{display: 'flex', gap: '10px'}}>
                    <select id="model-select" value={localModel} onChange={e => setLocalModel(e.target.value)} style={{...styles.select, flex: 1}}>
                        {availableModels.length > 0 ? (
                            availableModels.map(m => <option key={m} value={m}>{m}</option>)
                        ) : (
                            <option value={localModel} disabled>{localModel}</option>
                        )}
                    </select>
                    <button onClick={fetchModels} disabled={fetchingModels} style={{...styles.button, padding: '10px 15px', background: theme.primary, color: 'white'}}>
                        {fetchingModels ? 'Fetching...' : (localApiProvider === 'ollama' ? 'Refresh Local Models' : 'Get Models')}
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
