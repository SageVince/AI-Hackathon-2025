// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight, RotateCcw, Volume2, VolumeX } from 'lucide-react';

// ---- Character PNGs ----
import cyberSageImg from '@/assets/cybersage.png';
import ecuadorKnucklesImg from '@/assets/ecuadorianknuckles.jpg';
import johnPorkImg from '@/assets/johnpork.PNG';
import porkBondyImg from '@/assets/porkbondy.PNG';
import samuelJacksonImg from '@/assets/samueljackson.PNG';
import snoopDogImg from '@/assets/snoopdog.jpg';
import stonkPorkImg from '@/assets/stonkpork.png';
import whaleWhispererImg from '@/assets/thewhalewhisperer.PNG';
import yapDollarImg from '@/assets/yapdollar.jpg';
import yenjuImg from '@/assets/yenju.png';

// ---- Characters (PNG-only version) ----
const characters = {
  stonkPork: { name: 'Stonk Pork', img: stonkPorkImg, isProtagonist: true },
  johnPork: { name: 'John Pork', img: johnPorkImg },
  snoopDog: { name: 'Snoop Dogg', img: snoopDogImg },
  porkBondy: { name: 'Pork Bondy', img: porkBondyImg },
  yapDollar: { name: 'Yap Dollar', img: yapDollarImg },
  ecuadorKnuckles: { name: 'Ecuador Knuckles', img: ecuadorKnucklesImg },
  cyberSage: { name: 'Cyber Sage', img: cyberSageImg },
  saga: { name: 'Saga', img: null },
  whaleWhisperer: { name: 'The Whale Whisperer', img: whaleWhispererImg },
  samuelJackson: { name: 'Samuel L. Jackson', img: samuelJacksonImg },
  yenju: { name: 'Yenju', img: yenjuImg },
  narrator: { name: 'Narrator', img: null }
};

// ---- Full Story (same as before) ----
// (Truncated for brevity; same content as last version with all 9 chapters)
// ---- Function ----
function VisualNovel() {
  const [currentScene, setCurrentScene] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [gameState, setGameState] = useState({ money: 0, knowledge: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const currentSceneData = scenes[currentScene];
  const currentLineData = currentSceneData?.lines[currentLine];
  const currentChar = useMemo(() => {
    if (!currentLineData) return null;
    if (currentLineData.speaker === 'narrator') return characters.narrator;
    return characters[currentLineData.speaker];
  }, [currentLineData]);

  useEffect(() => {
    if (!currentLineData) return;
    const text = currentLineData.text;
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        if (currentLineData.choice) setShowChoices(true);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [currentLine, currentScene]);

  const handleNext = () => {
    if (!currentLineData) return;
    if (isTyping) {
      setDisplayedText(currentLineData.text);
      setIsTyping(false);
      if (currentLineData.choice) setShowChoices(true);
      return;
    }
    if (showChoices) return;
    if (currentLine < currentSceneData.lines.length - 1) setCurrentLine(currentLine + 1);
    else if (currentScene < scenes.length - 1) { setCurrentScene(currentScene + 1); setCurrentLine(0); }
  };

  const handleChoice = (option) => {
    setGameState(prev => ({ money: prev.money + option.money, knowledge: prev.knowledge + option.knowledge }));
    setShowChoices(false);
    handleNext();
  };

  const handleRestart = () => { setCurrentScene(0); setCurrentLine(0); setGameState({ money: 0, knowledge: 0 }); setShowChoices(false); };

  return (
    <div className={`min-h-screen ${currentSceneData.background} text-white flex flex-col relative overflow-hidden`}>
      {/* Header */}
      <div className="bg-black/70 p-4 flex justify-between items-center border-b-2 border-gray-700">
        <div className="flex gap-6 text-sm font-bold">
          <span className="text-green-400">💰 ${gameState.money}</span>
          <span className="text-blue-400">📚 Knowledge: {gameState.knowledge}</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setSoundEnabled(!soundEnabled)} className="hover:text-green-400 p-2 hover:bg-white/10 rounded">
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button onClick={handleRestart} className="hover:text-green-400 p-2 hover:bg-white/10 rounded">
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="text-center py-4 bg-black/50 border-b-2 border-yellow-600">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-lg tracking-wide">{currentSceneData.title}</h2>
      </div>

      {/* Character Display */}
      <div className="flex-1 flex items-center justify-center relative">
        {currentChar?.img && currentLineData?.speaker !== 'narrator' && (
          <img src={currentChar.img} alt={currentChar.name} className="max-h-[500px] rounded-lg shadow-2xl transition-all duration-500" />
        )}
      </div>

      {/* Text Box */}
      <div className="relative z-20 p-6">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-95 rounded-xl p-4 border-4 border-blue-500 max-w-4xl mx-auto w-full shadow-2xl">
          <div className="text-white text-lg leading-relaxed min-h-24 font-sans">
            {displayedText}
            {isTyping && <span className="animate-pulse ml-1">▌</span>}
          </div>

          {showChoices && currentLineData?.choice && (
            <div className="mt-4 space-y-2">
              <div className="text-yellow-300 font-bold mb-3 text-base">{currentLineData.choice.question}</div>
              {currentLineData.choice.options.map((option, idx) => (
                <button key={idx} onClick={() => handleChoice(option)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 p-3 rounded-lg text-left transition-all transform hover:scale-105 font-semibold border-2 border-white border-opacity-20 shadow-lg text-base">
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {!showChoices && (
            <button onClick={handleNext} className="mt-4 flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-2 rounded-full ml-auto transition-all transform hover:scale-105 shadow-lg font-bold border-2 border-white border-opacity-20">
              {isTyping ? 'Skip' : currentLine < currentSceneData.lines.length - 1 || currentScene < scenes.length - 1 ? 'Next' : 'Restart'}
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisualNovel;
