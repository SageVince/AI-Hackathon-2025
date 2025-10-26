
import React from 'react';

const CandlestickChart = ({ data, width = 120, height = 40 }) => {
  if (!data || data.length === 0) {
    return <div style={{ width, height, background: '#2c2c34' }} />;
  }

  const prices = data.slice(-30);
  const minPrice = Math.min(...prices.map(p => p.low));
  const maxPrice = Math.max(...prices.map(p => p.high));
  const priceRange = maxPrice - minPrice;

  const getCandle = (candleData, index) => {
    const { open, high, low, close } = candleData;
    const color = close >= open ? '#28a745' : '#dc3545';

    const x = (width / prices.length) * (index + 0.5);
    const y_high = priceRange > 0 ? ((maxPrice - high) / priceRange) * height : height / 2;
    const y_low = priceRange > 0 ? ((maxPrice - low) / priceRange) * height : height / 2;
    const y_open = priceRange > 0 ? ((maxPrice - open) / priceRange) * height : height / 2;
    const y_close = priceRange > 0 ? ((maxPrice - close) / priceRange) * height : height / 2;

    const bodyHeight = Math.abs(y_open - y_close);

    return (
      <g key={index}>
        {/* Wick */}
        <line x1={x} y1={y_high} x2={x} y2={y_low} stroke={color} strokeWidth="1" />
        {/* Body */}
        <rect
          x={x - 1.5}
          y={Math.min(y_open, y_close)}
          width="3"
          height={bodyHeight < 1 ? 1 : bodyHeight} // Ensure body is at least 1px tall to be visible
          fill={color}
        />
      </g>
    );
  };

  return (
    <svg width={width} height={height} style={{ background: '#25252b', borderRadius: '4px' }}>
      {prices.map((d, i) => getCandle(d, i))}
    </svg>
  );
};

export default CandlestickChart;
