
import React, { useState } from 'react';
import RPGMenu from './components/RPGMenu';
import VisualNovel from './components/VisualNovel';
import ChapterSelection from './components/ChapterSelection';
import StonksMinigame from './components/StonksMinigame';
import Portfolio from './components/Portfolio'; 
import Leaderboard from './components/Leaderboard';
import AIAssistants from './components/AIAssistants';
import Savings from './components/Savings';
import Knowledge from './components/Knowledge'; // Import Knowledge
import TopBar from './components/TopBar';
import { lightTheme, darkTheme } from './themes';

export default function App() {
  const [currentView, setCurrentView] = useState('rpg-menu');
  const [startScene, setStartScene] = useState(0);
  
  const [gameBalance, setGameBalance] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const [theme, setTheme] = useState(lightTheme);

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

  const handlePortfolioEnd = (finalNetWorth) => {
    if (finalNetWorth > highScore) {
      setHighScore(finalNetWorth);
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
        return <Leaderboard backToMenu={handleBackToMenu} userHighScore={highScore} theme={theme} />;
      case 'ai-assistants':
        return <AIAssistants backToMenu={handleBackToMenu} theme={theme} />;
      case 'savings':
        return <Savings theme={theme} />;
      case 'knowledge': // Add knowledge view
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
