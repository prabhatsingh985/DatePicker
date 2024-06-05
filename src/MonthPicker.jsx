import React, { useState } from 'react';
import './DatePicker.css'; // Import your CSS file

const MonthPicker = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let startY = 0;
  let endY = 0;

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setTouchStartY(touch.clientY);
  };

  const handleTouchMove = (event) => {
    if (!touchStartY) return;
    const touch = event.touches[0];
    const touchEndY = touch.clientY;
    if (touchStartY - touchEndY > 10) {
      setSelectedMonth(selectedMonth >= 12 ? 1 : selectedMonth + 1);
    } else if (touchEndY - touchStartY > 10) {
      setSelectedMonth(selectedMonth <= 1 ? 12  : selectedMonth - 1);
    }

    setTouchStartY(null);
  };

  const [touchStartY, setTouchStartY] = useState(null);

  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      setSelectedMonth(selectedMonth === 1 ? 12 : selectedMonth - 1);
    } else {
      setSelectedMonth(selectedMonth === 12 ? 1 : selectedMonth + 1);
    }
  };

  return (
    <div
      className="picker"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="picker-item" onClick={() => setSelectedMonth((selectedMonth - 1) < 1 ? 12 : selectedMonth - 1)}>
        {months[(selectedMonth - 2 + 12) % 12]}
      </div>
      <div className="picker-item selected">
        {months[selectedMonth - 1]}
      </div>
      <div className="picker-item" onClick={() => setSelectedMonth((selectedMonth + 1) > 12 ? 1 : selectedMonth + 1)}>
        {months[selectedMonth % 12]}
      </div>
    </div>
  );
};

export default MonthPicker;
