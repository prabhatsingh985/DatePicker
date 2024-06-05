import React, { useState } from 'react';
import './DatePicker.css'; // Import your CSS file

const DayPicker = ({ selectedDay, setSelectedDay }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      setSelectedDay(selectedDay === 1 ? 31 : selectedDay - 1);
    } else {
      setSelectedDay(selectedDay === 31 ? 1 : selectedDay + 1);
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setTouchStartY(touch.clientY);
  };

  const handleTouchMove = (event) => {
    if (!touchStartY) return;
    const touch = event.touches[0];
    const touchEndY = touch.clientY;

    if (touchStartY - touchEndY > 10) {
      setSelectedDay(selectedDay >= 31 ? 1 : selectedDay + 1);
    } else if (touchEndY - touchStartY > 10) {
      setSelectedDay(selectedDay <= 1 ? 31 : selectedDay - 1);
    }

    setTouchStartY(null);
  };

  const [touchStartY, setTouchStartY] = useState(null);

  return (
    <div
      className="picker"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="picker-item" onClick={() => setSelectedDay((selectedDay - 1) < 1 ? 31 : selectedDay - 1)}>{(selectedDay - 1) < 1 ? 31 : selectedDay - 1}</div>
      <div className="picker-item selected">{selectedDay}</div>
      <div className="picker-item" onClick={() => setSelectedDay((selectedDay + 1) > 31 ? 1 : selectedDay + 1)}>{(selectedDay + 1) > 31 ? 1 : selectedDay + 1}</div>
    </div>
  );
};

export default DayPicker;
