
import React, { useState, useEffect, useRef } from 'react';
import Stock from './Stock';

const Portfolio = ({ backToMenu, gameBalance, depositEarnings, onGameEnd, theme }) => {
    const [cash, setCash] = useState(10000);
    const [netWorth, setNetWorth] = useState(10000);
    const [stocks, setStocks] = useState([]);
    const [tradeLog, setTradeLog] = useState([]);
    const [marketData, setMarketData] = useState({});
    const [time, setTime] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [accolades, setAccolades] = useState([]);
    const [activeTab, setActiveTab] = useState('stocks'); // New state for active tab

    const initialDeposit = useRef(false);
    const initialNetWorth = useRef(10000); // Store initial net worth

    // --- Mini Challenges ---
    const challenges = [
        { id: 'profit_3_percent_monthly', description: 'Make 3% profit in a month', check: (start, end, days) => (end/start - 1) * 100 >= 3 && days <= 30 },
        { id: 'profit_5_percent_quarterly', description: 'Make 5% profit in 90 days', check: (start, end, days) => (end/start - 1) * 100 >= 5 && days <= 90 },
        { id: 'no_losses', description: 'Finish with no losses', check: (start, end) => end >= start },
    ];

    useEffect(() => {
        if (!initialDeposit.current) {
            const depositedAmount = depositEarnings();
            const newInitialNetWorth = 10000 + depositedAmount;
            setCash(prevCash => prevCash + depositedAmount);
            setNetWorth(newInitialNetWorth);
            initialNetWorth.current = newInitialNetWorth;
            initialDeposit.current = true;
        }
    }, [depositEarnings]);

    useEffect(() => {
        const companies = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META'];
        const initialMarketData = {};
        companies.forEach(company => {
            initialMarketData[company] = generateStockData(90);
        });
        setMarketData(initialMarketData);
    }, []);

    useEffect(() => {
        const baseInterval = 2000;
        const interval = baseInterval / speed;

        const marketInterval = setInterval(() => {
            if (time < 89) {
                setTime(prevTime => prevTime + 1);
            } else {
                clearInterval(marketInterval);
                endGame();
            }
        }, interval);

        return () => clearInterval(marketInterval);
    }, [time, speed]);

    useEffect(() => {
        let currentStockValue = 0;
        stocks.forEach(stock => {
            const currentPrice = marketData[stock.ticker] ? marketData[stock.ticker][time].close : 0;
            currentStockValue += stock.shares * currentPrice;
        });
        setNetWorth(cash + currentStockValue);
    }, [stocks, time, marketData, cash]);

    const generateStockData = (days) => {
        let data = [];
        let lastClose = Math.random() * 200 + 50;
        for (let i = 0; i < days; i++) {
            const open = lastClose * (1 + (Math.random() - 0.48) * 0.1);
            const close = open * (1 + (Math.random() - 0.5) * 0.12);
            const high = Math.max(open, close) * (1 + Math.random() * 0.05);
            const low = Math.min(open, close) * (1 - Math.random() * 0.05);
            data.push({ time: i, open, high, low, close });
            lastClose = close;
        }
        return data;
    };

    const handleTrade = (ticker, shares, action) => {
        const currentPrice = marketData[ticker] ? marketData[ticker][time].close : 0;
        if (!currentPrice) return;

        const cost = shares * currentPrice;

        if (action === 'buy') {
            if (cash >= cost) {
                setCash(cash - cost);
                const existingStock = stocks.find(s => s.ticker === ticker);
                if (existingStock) {
                    setStocks(stocks.map(s => s.ticker === ticker ? { ...s, shares: s.shares + shares } : s));
                } else {
                    setStocks([...stocks, { ticker, shares, purchasePrice: currentPrice }]);
                }
                logTrade(ticker, shares, currentPrice, 'Buy');
            } else {
                alert('Not enough cash!');
            }
        } else if (action === 'sell') {
            const stockToSell = stocks.find(s => s.ticker === ticker);
            if (stockToSell && stockToSell.shares >= shares) {
                setCash(cash + cost);
                setStocks(stocks.map(s => s.ticker === ticker ? { ...s, shares: s.shares - shares } : s).filter(s => s.shares > 0));
                logTrade(ticker, shares, currentPrice, 'Sell');
            } else {
                alert('Not enough shares to sell!');
            }
        }
    };

    const logTrade = (ticker, shares, price, type) => {
        const logEntry = `${new Date().toLocaleTimeString()}: ${type} ${shares} of ${ticker} @ $${price.toFixed(2)}`;
        setTradeLog([logEntry, ...tradeLog]);
    };

    const endGame = () => {
        const finalNetWorth = netWorth;
        const startNetWorth = initialNetWorth.current;
        const days = time + 1;

        const completedAccolades = challenges
            .filter(c => c.check(startNetWorth, finalNetWorth, days))
            .map(c => c.description);
            
        onGameEnd(finalNetWorth, completedAccolades);
    };

    const styles = {
        container: { padding: '20px', background: theme.background, color: theme.text, display: 'flex', gap: '20px' },
        leftPanel: { flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' },
        rightPanel: { flex: 3, display: 'flex', flexDirection: 'column', gap: '20px' },
        section: { background: theme.cardBg, padding: '20px', borderRadius: '12px', border: `1px solid ${theme.borderColor}` },
        title: { fontSize: '1.5rem', fontWeight: 'bold', color: theme.primary, marginBottom: '15px' },
        stat: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
        tradeLog: { height: '200px', overflowY: 'auto', border: `1px solid ${theme.borderColor}`, padding: '10px', borderRadius: '8px' },
        stockDisplay: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' },
        speedControls: { display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', marginTop: '10px' },
        speedButton: { background: theme.secondary, color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' },
        activeSpeed: { background: theme.primary },
        challengeList: { listStyle: 'none', padding: 0, margin: 0 },
        challengeItem: { marginBottom: '8px', color: theme.textSecondary },
        tabs: { display: 'flex', borderBottom: `1px solid ${theme.borderColor}`, marginBottom: '20px' },
        tab: { padding: '10px 20px', cursor: 'pointer', borderBottom: '2px solid transparent', color: theme.textSecondary },
        activeTab: { color: theme.primary, borderBottom: `2px solid ${theme.primary}` },
        comingSoon: { textAlign: 'center', padding: '50px', fontSize: '1.5rem', color: theme.textSecondary }
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftPanel}>
                <div style={styles.section}>
                    <h2 style={styles.title}>Portfolio Stats</h2>
                    <div style={styles.stat}><span>Cash:</span><span>${cash.toFixed(2)}</span></div>
                    <div style={styles.stat}><span>Net Worth:</span><span>${netWorth.toFixed(2)}</span></div>
                    <div style={styles.stat}><span>Day:</span><span>{time + 1}/90</span></div>
                    <div style={styles.speedControls}>
                        <span>Speed:</span>
                        {[1, 2, 4, 8].map(s => (
                            <button 
                                key={s} 
                                onClick={() => setSpeed(s)} 
                                style={{...styles.speedButton, ...(speed === s ? styles.activeSpeed : {})}}>
                                {s}x
                            </button>
                        ))}
                    </div>
                    <button onClick={endGame} style={{...styles.button, background: theme.textSecondary, color: theme.background, width: '100%', marginTop: '10px'}}>End Game & See Score</button>
                </div>
                 <div style={styles.section}>
                    <h2 style={styles.title}>Mini-Challenges</h2>
                    <ul style={styles.challengeList}>
                        {challenges.map(c => <li key={c.id} style={styles.challengeItem}>{c.description}</li>)}
                    </ul>
                </div>
                <div style={styles.section}>
                    <h2 style={styles.title}>My Holdings</h2>
                    {activeTab === 'stocks' && (
                        stocks.length > 0 ? (
                            stocks.map(stock => (
                                <div key={stock.ticker} style={styles.stat}>
                                    <span>{stock.ticker}: {stock.shares} shares</span>
                                    <span>Avg: ${stock.purchasePrice.toFixed(2)}</span>
                                </div>
                            ))
                        ) : (
                            <p>You don't own any stocks yet.</p>
                        )
                    )}
                    {activeTab === 'options' && (
                         <p>You don't own any options yet.</p>
                    )}
                </div>
                <div style={styles.section}>
                    <h2 style={styles.title}>Trade Log</h2>
                    <div style={styles.tradeLog}>
                        {tradeLog.map((log, i) => <div key={i}>{log}</div>)}
                    </div>
                </div>
            </div>
            <div style={styles.rightPanel}>
                <div style={styles.section}>
                    <div style={styles.tabs}>
                        <div style={{...styles.tab, ...(activeTab === 'stocks' ? styles.activeTab : {})}} onClick={() => setActiveTab('stocks')}>Stocks</div>
                        <div style={{...styles.tab, ...(activeTab === 'options' ? styles.activeTab : {})}} onClick={() => setActiveTab('options')}>Options</div>
                    </div>
                    {activeTab === 'stocks' && (
                        <div style={styles.stockDisplay}>
                            {Object.keys(marketData).map(ticker => (
                                <Stock 
                                    key={ticker} 
                                    ticker={ticker} 
                                    marketData={marketData} 
                                    time={time} 
                                    handleTrade={handleTrade} 
                                    theme={theme} 
                                />
                            ))}
                        </div>
                    )}
                    {activeTab === 'options' && (
                        <div style={styles.comingSoon}>
                            The options market is under development. Check back soon for advanced trading features!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
