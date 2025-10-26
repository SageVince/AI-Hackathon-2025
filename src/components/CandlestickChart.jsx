
import React from 'react';

const CandlestickChart = ({ history, width = 120, height = 40 }) => {
  if (!history || history.length < 2) {
    return <div style={{ width, height, background: '#2c2c34' }} />;
  }

  const prices = history.slice(-30); // Use last 30 updates for the chart
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  const getCandle = (index) => {
    if (index === 0) return null;
    const open = prices[index - 1];
    const close = prices[index];
    const high = Math.max(open, close);
    const low = Math.min(open, close);
    const color = close >= open ? '#28a745' : '#dc3545'; // Green for up, red for down

    const x = (width / prices.length) * index;
    const y_high = ((maxPrice - high) / priceRange) * height;
    const y_low = ((maxPrice - low) / priceRange) * height;
    const y_open = ((maxPrice - open) / priceRange) * height;
    const y_close = ((maxPrice - close) / priceRange) * height;

    return (
      <g key={index}>
        {/* Wick */}
        <line x1={x} y1={y_high} x2={x} y2={y_low} stroke={color} strokeWidth="1" />
        {/* Body */}
        <line x1={x} y1={y_open} x2={x} y2={y_close} stroke={color} strokeWidth="3" />
      </g>
    );
  };

  return (
    <svg width={width} height={height} style={{ background: '#25252b', borderRadius: '4px' }}>
      {prices.map((_, i) => getCandle(i))}
    </svg>
  );
};

export default CandlestickChart;
