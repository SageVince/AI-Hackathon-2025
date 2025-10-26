
import React, { useState } from 'react';
import CandlestickChart from './CandlestickChart';

const Stock = ({ ticker, marketData, time, handleTrade, theme }) => {
    const [shares, setShares] = useState(1);
    const stockHistory = marketData[ticker];
    const currentPrice = stockHistory[time].close;
    const prevPrice = time > 0 ? stockHistory[time - 1].close : currentPrice;
    const change = currentPrice - prevPrice;
    const changeColor = change >= 0 ? '#4caf50' : '#f44336';

    const styles = {
        stockCard: { background: theme.inputBg, padding: '15px', borderRadius: '8px' },
        title: { fontSize: '1.2rem', fontWeight: 'bold', color: theme.primary, marginBottom: '15px' },
        button: { padding: '8px 12px', borderRadius: '8px', border: 'none', background: theme.primary, color: 'white', cursor: 'pointer' },
        input: { padding: '8px', borderRadius: '8px', border: `1px solid ${theme.borderColor}`, background: theme.inputBg, color: theme.text, width: '60px' }
    };

    return (
        <div style={styles.stockCard}>
            <h3 style={{...styles.title, fontSize: '1.2rem'}}>{ticker}</h3>
            <div style={{color: changeColor, marginBottom: '10px'}}>
                ${currentPrice.toFixed(2)} ({change.toFixed(2)})
            </div>
            <CandlestickChart data={stockHistory.slice(0, time + 1)} theme={theme} />
            <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <input type="number" value={shares} onChange={e => setShares(parseInt(e.target.value) || 1)} style={styles.input} min="1" />
                <button onClick={() => handleTrade(ticker, shares, 'buy')} style={styles.button}>Buy</button>
                <button onClick={() => handleTrade(ticker, shares, 'sell')} style={{...styles.button, background: theme.textSecondary}}>Sell</button>
            </div>
        </div>
    );
};

export default Stock;
