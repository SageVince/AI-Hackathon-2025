
import React, { useState, useEffect } from 'react';
import RPGMenu from './components/RPGMenu';
import VisualNovel from './components/VisualNovel';
import ChapterSelection from './components/ChapterSelection';
import StonksMinigame from './components/StonksMinigame';
import Portfolio from './components/Portfolio'; 
import Leaderboard from './components/Leaderboard';
import AIAssistants from './components/AIAssistants';
import Savings from './components/Savings';
import Knowledge from './components/Knowledge';
import TopBar from './components/TopBar';
import { lightTheme, darkTheme } from './themes';

const INITIAL_CAPITAL = 100000;

export default function App() {
  const [currentView, setCurrentView] = useState('rpg-menu');
  const [startScene, setStartScene] = useState(0);
  
  const [gameBalance, setGameBalance] = useState(0);
  const [highScore, setHighScore] = useState(0); // This will store the highest *final net worth*
  const [userAccolades, setUserAccolades] = useState([]);
  
  const [theme, setTheme] = useState(lightTheme);
  
  const [apiKey, setApiKey] = useState('');
  const [apiProvider, setApiProvider] = useState('google');
  const [model, setModel] = useState('gemini-1.5-pro');

  useEffect(() => {
    const savedApiKey = localStorage.getItem('apiKey');
    const savedApiProvider = localStorage.getItem('apiProvider');
    const savedModel = localStorage.getItem('model');

    if (savedApiKey) setApiKey(savedApiKey);
    if (savedApiProvider) setApiProvider(savedApiProvider);
    if (savedModel) setModel(savedModel);
  }, []);

  const handleApiSettingsChange = (settings) => {
    setApiKey(settings.key);
    setApiProvider(settings.provider);
    setModel(settings.model);
    localStorage.setItem('apiKey', settings.key);
    localStorage.setItem('apiProvider', settings.provider);
    localStorage.setItem('model', settings.model);
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const handleBackToMenu = () => setCurrentView('rpg-menu');

  const handleChapterSelect = (chapterIndex) => {
    setStartScene(chapterIndex);
    setCurrentView('visual-novel');
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  }

  const handleMiniGameEnd = (score) => {
    setGameBalance(prevBalance => prevBalance + score);
    handleNavigation('portfolio');
  }

  // This function now correctly handles the result from the Portfolio simulation.
  const handlePortfolioEnd = (gain, accolades) => {
    // The value from the portfolio is the gain/loss. We calculate the final net worth.
    const finalNetWorth = INITIAL_CAPITAL + gain;
    const roundedNetWorth = Math.round(finalNetWorth);

    // We only update the high score if the new net worth is greater than the previous high score.
    if (roundedNetWorth > highScore) {
      setHighScore(roundedNetWorth); // Set the high score to the *actual final net worth*.
      setUserAccolades(accolades);
    }
    setCurrentView('leaderboard');
  }

  const depositToPortfolio = () => {
    const amount = gameBalance;
    setGameBalance(0);
    return amount;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'visual-novel':
        return <VisualNovel backToMenu={handleBackToMenu} startScene={startScene} theme={theme} />;
      case 'chapter-selection':
        return <ChapterSelection onSelectChapter={handleChapterSelect} backToMenu={handleBackToMenu} theme={theme} />;
      case 'stonks-minigame':
        return <StonksMinigame backToMenu={handleBackToMenu} onGameEnd={handleMiniGameEnd} theme={theme} />;
      case 'portfolio': 
        return <Portfolio 
                  backToMenu={handleBackToMenu} 
                  gameBalance={gameBalance} 
                  depositEarnings={depositToPortfolio} 
                  onGameEnd={handlePortfolioEnd}
                  theme={theme}
               />;
      case 'leaderboard':
        // Pass the highScore (which is the final net worth) to the Leaderboard.
        return <Leaderboard backToMenu={handleBackToMenu} userHighScore={highScore} userAccolades={userAccolades} theme={theme} />;
      case 'ai-assistants':
        return <AIAssistants 
                  backToMenu={handleBackToMenu} 
                  theme={theme} 
                  apiKey={apiKey}
                  apiProvider={apiProvider}
                  model={model}
                  onApiSettingsChange={handleApiSettingsChange}
                />;
      case 'savings':
        return <Savings theme={theme} />;
      case 'knowledge':
        return <Knowledge theme={theme} />;
      case 'rpg-menu':
      default:
        return <RPGMenu onNavigate={handleNavigation} theme={theme} />;
    }
  }

  const mainContentStyle = {
      paddingTop: currentView !== 'rpg-menu' ? '60px' : '0',
      background: theme.background,
      minHeight: '100vh'
  }

  return (
    <div>
      {currentView !== 'rpg-menu' && (
          <TopBar 
              onNavigate={handleNavigation} 
              toggleTheme={toggleTheme} 
              theme={theme} 
              currentView={currentView} 
          />
      )}
      <div style={mainContentStyle}>
        {renderContent()}
      </div>
    </div>
  );
}
