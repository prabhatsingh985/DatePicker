import React, { useState, useEffect } from 'react';
import './DatePicker.css'; // Import your CSS file

const YearPicker = ({ selectedYear, setSelectedYear }) => {
  const years = Array.from({ length: 100 }, (_, i) => 1900 + i); // Example range from 1900 to 1999
  
  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedYear(selectedYear + 1);
    }
  };

  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    touchEndY = event.changedTouches[0].clientY;
    handleGesture();
  };

  const handleGesture = () => {
    if (touchStartY - touchEndY > 50) {
      setSelectedYear(selectedYear + 1);
    }
    if (touchEndY - touchStartY > 50) {
      setSelectedYear(selectedYear - 1);
    }
  };

  return (
    <div 
      className="picker" 
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="picker-item" onClick={() => setSelectedYear(selectedYear - 1)}>{selectedYear - 1}</div>
      <div className="picker-item selected">{selectedYear}</div>
      <div className="picker-item" onClick={() => setSelectedYear(selectedYear + 1)}>{selectedYear + 1}</div>
    </div>
  );
};

export default YearPicker;
