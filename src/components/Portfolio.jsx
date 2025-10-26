
import React, { useState, useEffect, useMemo } from 'react';
import CandlestickChart from './CandlestickChart'; 

const lessons = {
    welcome: { title: 'Welcome to the Simulator!', content: 'This is a safe space to learn about investing. You have $10,000 in cash. Try buying some shares from the market below.' },
    whyStocks: { title: 'Why Do Companies Issue Stock?', content: 'You just bought your first shares! When you buy a stock, you\'re buying a small piece of ownership in a company. Companies sell stock to raise money for growth, research, and other projects.' },
    diversify: { title: 'Lesson: Diversification', content: '\'Don\'t put all your eggs in one basket.\' Holding stocks in different companies and industries can help reduce risk. If one stock performs poorly, your other investments can help balance it out.' },
    volatile: { title: 'Lesson: Market Volatility', content: 'Stock prices go up and down—that\'s volatility. Short-term changes are normal. Great investors think long-term and don\'t panic when prices dip. Focus on the company\'s value.' }
};
const initialStocks = [
    { ticker: 'PGP', name: 'Pharma-Gen', price: 479.20, history: [347.93], change: 0 },
    { ticker: 'RHG', name: 'The Retail Holdings Group', price: 314.74, history: [319.08], change: 0 },
    { ticker: 'TCE', name: 'The Consumer Exchange', price: 259.69, history: [294.86], change: 0 },
    { ticker: 'BPE', name: 'Bio-Pharma', price: 341.46, history: [291.70], change: 0 },
    { ticker: 'HBG', name: 'Healthbridge', price: 320.52, history: [291.29], change: 0 },
];

const Portfolio = ({ backToMenu, gameBalance, depositEarnings, onGameEnd, theme }) => {
  const [stocks, setStocks] = useState(initialStocks);
  const [portfolio, setPortfolio] = useState({ cash: 10000, holdings: [] });
  const [transactions, setTransactions] = useState([]);
  const [tradeQuantities, setTradeQuantities] = useState({});
  const [activeLessonKey, setActiveLessonKey] = useState('welcome');

  // --- Game State ---
  const [marketDaysLeft, setMarketDaysLeft] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(1); // Speed multiplier

  // --- Game Loop and Market Simulation ---
  useEffect(() => {
    if (isGameOver) return;

    const gameTick = setInterval(() => {
        setMarketDaysLeft(prev => prev - 1);
    }, 4000 / gameSpeed);

    const marketInterval = setInterval(() => {
      setStocks(currentStocks => 
        currentStocks.map(stock => {
          const changePercent = (Math.random() - 0.49) * 0.08;
          const newPrice = Math.max(10, stock.price * (1 + changePercent));
          const priceChange = newPrice - stock.price;
          return { ...stock, price: newPrice, history: [...stock.history, newPrice].slice(-50), change: priceChange };
        })
      );
    }, 2000 / gameSpeed);

    if (marketDaysLeft <= 0) {
        setIsGameOver(true);
    }

    return () => {
        clearInterval(gameTick);
        clearInterval(marketInterval);
    }
  }, [marketDaysLeft, isGameOver, gameSpeed]);

  const handleDeposit = () => {
    const amount = depositEarnings();
    setPortfolio(prev => ({...prev, cash: prev.cash + amount}));
  }

  const handleQuantityChange = (ticker, value) => {
    if(isGameOver) return;
    const quantity = parseInt(value, 10);
    setTradeQuantities({ ...tradeQuantities, [ticker]: isNaN(quantity) ? 0 : quantity });
  };

  const handleBuy = (ticker) => {
      if(isGameOver) return;
    const shares = tradeQuantities[ticker] || 0;
    if (shares <= 0) return;
    const stock = stocks.find(s => s.ticker === ticker);
    const cost = stock.price * shares;
    if (portfolio.cash >= cost) {
      const newCash = portfolio.cash - cost;
      const existingHolding = portfolio.holdings.find(h => h.ticker === ticker);
      let newHoldings = existingHolding ? portfolio.holdings.map(h => h.ticker === ticker ? { ...h, shares: h.shares + shares } : h) : [...portfolio.holdings, { ticker, shares }];
      setPortfolio({ cash: newCash, holdings: newHoldings });
      setTransactions(prev => [{ type: 'BUY', ticker, shares, price: stock.price, id: Date.now() }, ...prev]);
    } else { alert("Not enough cash for this transaction."); }
  };

  const handleSell = (ticker) => {
      if(isGameOver) return;
    const shares = tradeQuantities[ticker] || 0;
    if (shares <= 0) return;
    const stock = stocks.find(s => s.ticker === ticker);
    const holding = portfolio.holdings.find(h => h.ticker === ticker);
    if (holding && holding.shares >= shares) {
      const revenue = stock.price * shares;
      const newCash = portfolio.cash + revenue;
      const newHoldings = portfolio.holdings.map(h => h.ticker === ticker ? { ...h, shares: h.shares - shares } : h).filter(h => h.shares > 0);
      setPortfolio({ cash: newCash, holdings: newHoldings });
      setTransactions(prev => [{ type: 'SELL', ticker, shares, price: stock.price, id: Date.now() }, ...prev]);
    } else { alert("You don\'t own enough shares to sell."); }
  };

  const holdingsValue = useMemo(() => portfolio.holdings.reduce((acc, h) => acc + ((stocks.find(s => s.ticker === h.ticker)?.price || 0) * h.shares), 0), [portfolio.holdings, stocks]);
  const netWorth = portfolio.cash + holdingsValue;

  useEffect(() => {
    if (transactions.length > 0 && activeLessonKey === 'welcome') setActiveLessonKey('whyStocks');
    const volatileTransaction = transactions.find(t => t.price < 50);
    if (volatileTransaction && activeLessonKey !== 'diversify') setActiveLessonKey('volatile');
    if (portfolio.holdings.length === 1 && holdingsValue / netWorth > 0.7) setActiveLessonKey('diversify');
  }, [transactions, portfolio.holdings, netWorth, holdingsValue, activeLessonKey]);


  const styles = {
    container: { background: theme.background, color: theme.text, minHeight: 'calc(100vh - 60px)', fontFamily: `'Segoe UI', sans-serif`, position: 'relative' },
    header: { textAlign: 'center', padding: '40px 20px' },
    main: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', padding: '0 30px' },
    card: { background: theme.cardBg, borderRadius: '12px', padding: '20px', boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})`, marginBottom: '20px', border: `1px solid ${theme.borderColor}` },
    cardTitle: { fontSize: '1.5rem', fontWeight: '600', color: theme.primary, marginBottom: '20px' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { textAlign: 'left', padding: '12px', borderBottom: `2px solid ${theme.borderColor}`, color: theme.textSecondary, textTransform: 'uppercase', fontSize: '0.9rem' },
    td: { padding: '12px', borderBottom: `1px solid ${theme.borderColor}`, verticalAlign: 'middle', color: theme.text },
    input: { width: '60px', padding: '8px', marginRight: '10px', borderRadius: '6px', border: `1px solid ${theme.borderColor}`, background: theme.inputBg, color: theme.text },
    button: { padding: '8px 12px', fontSize: '0.9rem', cursor: 'pointer', borderRadius: '6px', border: 'none', marginRight: '5px', fontWeight: 'bold' },
    backButton: { display: 'block', margin: '40px auto', padding: '12px 25px', background: theme.primary, color: theme.cardBg, border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
    lessonCard: { background: theme.lessonBg, borderLeft: `5px solid ${theme.primary}` },
    lessonTitle: { color: theme.primary },
    lessonContent: { lineHeight: 1.6, fontSize: '0.95rem', color: theme.textSecondary },
    depositButton: { background: theme.accentPositive, color: 'white', padding: '10px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginBottom: '15px' },
    timerContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', gap: '20px'},
    timer: { fontSize: '1.5rem', fontWeight: 'bold', color: theme.accent },
    speedButton: { padding: '8px 16px', fontSize: '1rem', cursor: 'pointer', borderRadius: '6px', border: `1px solid ${theme.accent}`, background: 'transparent', color: theme.accent, fontWeight: 'bold' },
    gameOverOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `rgba(${theme.background === '#1a1a1d' ? '26,26,29,0.9' : '241,245,249,0.9'})`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 100 },
  };

  const handleEndGameAndExit = () => {
      onGameEnd(netWorth);
  }

  const toggleSpeed = () => {
      setGameSpeed(current => {
          if(current === 4) return 1;
          return current * 2;
      })
  }

  if (isGameOver) {
    return (
        <div style={styles.container}>
            <div style={styles.gameOverOverlay}>
                <h1 style={{fontSize: '4rem', color: theme.accentNegative}}>Market Closed</h1>
                <p style={{fontSize: '1.5rem', color: theme.text, margin: '20px 0'}}>The simulation has ended.</p>
                <div style={{...styles.card, width: '300px', textAlign: 'center'}}>
                    <h2 style={styles.cardTitle}>Final Net Worth</h2>
                    <p style={{fontSize: '2.5rem', fontWeight: 'bold', color: theme.accentPositive}}>${netWorth.toFixed(2)}</p>
                </div>
                <button onClick={handleEndGameAndExit} style={{...styles.backButton, marginTop: '30px'}}>View Leaderboard</button>
            </div>
        </div>
    )
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
          <h1 style={{fontSize: '3rem', color: theme.primary}}>Portfolio Simulator</h1>
          <div style={styles.timerContainer}>
            <div style={styles.timer}>Market Days Left: {marketDaysLeft}</div>
            <button onClick={toggleSpeed} style={styles.speedButton}>Speed: {gameSpeed}x</button>
          </div>
      </header>
      <main style={styles.main}>
        {/* Left Column */}
        <div>
          <div style={styles.card}>
             <h2 style={styles.cardTitle}>Market</h2>
             <table style={styles.table}>
               <thead><tr><th style={styles.th}>Ticker</th><th style={styles.th}>Chart</th><th style={styles.th}>Price</th><th style={styles.th}>Actions</th></tr></thead>
               <tbody>
                 {stocks.map(stock => (
                   <tr key={stock.ticker}>
                     <td style={styles.td}>{stock.ticker} <span style={{color: theme.textSecondary, fontSize: '0.9rem'}}>- {stock.name}</span></td>
                     <td style={styles.td}><CandlestickChart history={stock.history} /></td>
                     <td style={styles.td}>${stock.price.toFixed(2)} <span style={{color: stock.change >= 0 ? theme.accentPositive : theme.accentNegative, fontSize: '0.9rem'}}>{stock.change.toFixed(2)}</span></td>
                     <td style={styles.td}>
                       <input type="number" min="0" style={styles.input} value={tradeQuantities[stock.ticker] || ''} onChange={e => handleQuantityChange(stock.ticker, e.target.value)} placeholder="Qty" />
                       <button onClick={() => handleBuy(stock.ticker)} style={{...styles.button, background: theme.accentPositive, color: 'white'}}>Buy</button>
                       <button onClick={() => handleSell(stock.ticker)} style={{...styles.button, background: theme.accentNegative, color: 'white'}}>Sell</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div style={styles.card}>
              <h2 style={styles.cardTitle}>Your Holdings</h2>
              {portfolio.holdings.length === 0 ? <p style={{color: theme.textSecondary}}>You do not own any stocks.</p> : (
                  <table style={styles.table}>
                      <thead><tr><th style={styles.th}>Ticker</th><th style={styles.th}>Shares</th><th style={styles.th}>Current Value</th></tr></thead>
                      <tbody>
                          {portfolio.holdings.map(h => {
                              const stock = stocks.find(s => s.ticker === h.ticker);
                              const currentValue = h.shares * (stock?.price || 0);
                              return (
                                  <tr key={h.ticker}>
                                      <td style={styles.td}>{h.ticker}</td>
                                      <td style={styles.td}>{h.shares}</td>
                                      <td style={styles.td}>${currentValue.toFixed(2)}</td>
                                  </tr>
                              )
                          })}
                      </tbody>
                  </table>
              )}
           </div>
        </div>

        {/* Right Column */}
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Your Portfolio</h2>
            {gameBalance > 0 && (
                <button onClick={handleDeposit} style={styles.depositButton}>Deposit ${gameBalance.toLocaleString()} from Minigame</button>
            )}
            <div style={{fontSize: '1.1rem', color: theme.text}}>
              <p>Cash: <strong>${portfolio.cash.toFixed(2)}</strong></p>
              <p>Holdings Value: <strong>${holdingsValue.toFixed(2)}</strong></p>
              <hr style={{margin: '15px 0', border: 'none', borderTop: `1px solid ${theme.borderColor}`}} />
              <p style={{fontSize: '1.3rem', fontWeight: 'bold'}}>Net Worth: <strong>${netWorth.toFixed(2)}</strong></p>
            </div>
          </div>
          <div style={{...styles.card, ...styles.lessonCard}}>
            <h2 style={{...styles.cardTitle, ...styles.lessonTitle}}>{lessons[activeLessonKey].title}</h2>
            <p style={styles.lessonContent}>{lessons[activeLessonKey].content}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
