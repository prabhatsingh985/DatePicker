import React, { useState, useRef } from 'react';
import './DatePicker.css'; // Import your CSS file

const MonthPicker = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const touchStartY = useRef(null);

  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      setSelectedMonth(selectedMonth === 1 ? 12 : selectedMonth - 1);
    } else {
      setSelectedMonth(selectedMonth === 12 ? 1 : selectedMonth + 1);
    }
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (!touchStartY.current) return;

    const touchEndY = event.touches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (diffY > 5) {
      setSelectedMonth(selectedMonth === 12 ? 1 : selectedMonth + 1);
      touchStartY.current = null;
    } else if (diffY < -5) {
      setSelectedMonth(selectedMonth === 1 ? 12 : selectedMonth - 1);
      touchStartY.current = null;
    }
  };

  return (
    <div
      className="picker"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="picker-item" onClick={() => setSelectedMonth((selectedMonth - 1) < 1 ? 12 : selectedMonth - 1)}>{months[(selectedMonth - 2 + 12) % 12]}</div>
      <div className="picker-item selected">{months[selectedMonth - 1]}</div>
      <div className="picker-item" onClick={() => setSelectedMonth((selectedMonth + 1) > 12 ? 1 : selectedMonth + 1)}>{months[selectedMonth % 12]}</div>
    </div>
  );
};

export default MonthPicker;
