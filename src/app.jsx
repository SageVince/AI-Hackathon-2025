import React, { useState } from 'react';
import RPGMenu from './components/RPGMenu';
import VisualNovel from './components/VisualNovel';
import ChapterSelection from './components/ChapterSelection';
import StonksMinigame from './components/StonksMinigame';

export default function App() {
  const [currentView, setCurrentView] = useState('rpg-menu');
  const [startScene, setStartScene] = useState(0);

  const backToMenu = () => setCurrentView('rpg-menu');

  const handleChapterSelect = (chapterIndex) => {
    setStartScene(chapterIndex);
    setCurrentView('visual-novel');
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  }

  if (currentView === 'visual-novel') {
    return <VisualNovel backToMenu={backToMenu} startScene={startScene} />;
  } else if (currentView === 'chapter-selection') {
    return <ChapterSelection onSelectChapter={handleChapterSelect} backToMenu={backToMenu} />;
  } else if (currentView === 'stonks-minigame') {
    return <StonksMinigame backToMenu={backToMenu} />;
  }

  return <RPGMenu onNavigate={handleNavigation} />;
}
